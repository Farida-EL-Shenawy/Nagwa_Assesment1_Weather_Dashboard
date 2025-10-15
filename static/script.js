document.addEventListener('DOMContentLoaded', () => {
    // --- Element Selection ---
    const loadingIndicator = document.getElementById('loading-indicator');
    const mainContainer = document.querySelector('.main-container');
    const errorContainer = document.getElementById('error-container');
    const weatherCard = document.getElementById('weather-card');
    const manualForm = document.getElementById('manual-input-form');
    const cityInput = document.getElementById('city-input');
    const weatherIcon = document.getElementById('weather-icon');
    const animationContainer = document.querySelector('.animation-container');

    // --- Animation & UI Update Functions ---
    const createAnimatedElements = (className, count) => {
        animationContainer.innerHTML = '';
        for (let i = 0; i < count; i++) {
            const el = document.createElement('div');
            el.className = className;
            if (className.includes('rain') || className.includes('snow')) {
                el.style.left = `${Math.random() * 100}%`;
                el.style.animationDelay = `${Math.random() * 5}s`;
                if (className === 'snow-flake') el.style.animationDuration = `${5 + Math.random() * 10}s`;
            }
            animationContainer.appendChild(el);
        }
    };

    const updateUI = (data) => {
        document.getElementById('city-name').textContent = data.city_name;
        document.getElementById('temperature-val').textContent = `${Math.round(data.temperature)}°`;
        document.getElementById('description-val').textContent = data.description;
        document.getElementById('humidity-val').textContent = data.humidity;
        document.getElementById('wind-speed-val').textContent = data.wind_speed;
        
        const desc = data.description.toLowerCase();
        let bodyClass = '';
        let iconClass = 'fa-cloud-sun';

        // **FIX #2 & #3**: Smarter logic for scattered clouds and new thunderstorm state
        if (desc.includes('clear')) {
            bodyClass = 'is-clear'; iconClass = 'fa-sun';
            createAnimatedElements('sun', 1);
        } else if (desc.includes('scattered') || desc.includes('few clouds') || desc.includes('partly cloudy')) {
            bodyClass = 'is-scattered-clouds'; iconClass = 'fa-cloud-sun'; // A more fitting icon
            createAnimatedElements('sun', 1);
            createAnimatedElements('cloud c2', 1);
        } else if (desc.includes('clouds')) {
            bodyClass = 'is-clouds'; iconClass = 'fa-cloud';
            createAnimatedElements('cloud c1', 1); createAnimatedElements('cloud c2', 1);
        } else if (desc.includes('rain')) {
            bodyClass = 'is-rain'; iconClass = 'fa-cloud-showers-heavy';
            createAnimatedElements('rain-drop', 100);
        } else if (desc.includes('snow')) {
            bodyClass = 'is-snow'; iconClass = 'fa-snowflake';
            createAnimatedElements('snow-flake', 100);
        } else if (desc.includes('thunderstorm')) {
            bodyClass = 'is-thunderstorm'; iconClass = 'fa-bolt';
            createAnimatedElements('lightning', 1); createAnimatedElements('cloud c1', 1);
        } else if (desc.includes('mist') || desc.includes('fog')) {
            bodyClass = 'is-mist'; iconClass = 'fa-smog';
            createAnimatedElements('cloud c1', 1);
        }
        
        document.body.className = bodyClass;
        weatherIcon.className = `fas ${iconClass}`;
    };

    // --- State & Data Fetching ---
    const showState = (state) => {
        if (state === 'loading') {
            loadingIndicator.classList.remove('hidden');
            mainContainer.classList.add('hidden');
        } else {
            loadingIndicator.classList.add('hidden');
            mainContainer.classList.remove('hidden');
            
            errorContainer.classList.add('hidden');
            weatherCard.classList.remove('visible');

            if (state === 'error') {
                errorContainer.classList.remove('hidden');
                manualForm.classList.remove('hidden');
            } else if (state === 'success') {
                weatherCard.classList.add('visible');
                manualForm.classList.remove('hidden');
            }
        }
    };

    const fetchWeather = async (url) => {
        showState('loading');
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Weather data not found.');
            const data = await response.json();
            updateUI(data);
            showState('success');
        } catch (error) {
            console.error('Fetch error:', error);
            showState('error');
        }
    };

    // --- Event Listeners and Initialization ---
    manualForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const city = cityInput.value.trim();
        if (city) {
            fetchWeather(`/api/weather/city/${encodeURIComponent(city)}`);
            cityInput.value = '';
        }
    });

    const initializeApp = () => {
        // **FIX #4**: Requesting High-Accuracy GPS for better location
        const geoOptions = { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 };

        navigator.geolocation.getCurrentPosition(
            (pos) => fetchWeather(`/api/weather/coords?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`),
            () => showState('error'),
            geoOptions
        );
    };
    
    initializeApp();
});