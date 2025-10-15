🌦️ **WeatherGlimpse** : A Dynamic, Animated Weather Dashboard
A modern, responsive single-page web application that delivers a visually immersive and user-friendly weather forecast, built with Python/Flask and Vanilla JavaScript.

✨ Key Features
High-Accuracy Geolocation: Prioritizes the browser's GPS for precise, real-time location detection.

Intelligent Animated Backgrounds: The UI background is a pure CSS animation that logically and beautifully changes to reflect the current weather (e.g., a shining sun for clear skies, moving clouds for overcast, and both for scattered clouds).

Modern Glassmorphism UI: A sleek, semi-transparent "frosted glass" interface for both the weather card and search form.

Polished Animations: All UI elements animate into view sequentially for a professional feel, with added effects for thunderstorms and a gently radiating sun.

Comprehensive Data: Clearly displays Temperature, Humidity, and Wind Speed.

Robust Error Handling: Gracefully handles invalid city names and geolocation failures with clear user feedback.

Fully Responsive: The layout adapts elegantly to smaller screen heights, ensuring all content remains visible without zooming.

🛠️ Tech Stack & Architecture
Backend: Python 3.13 with Flask for serving a lightweight REST API.

Frontend: Vanilla JavaScript (ES6+) for asynchronous data fetching and DOM manipulation.

Styling: Pure CSS with advanced techniques like keyframes for animations and backdrop-filter for the glassmorphism effect.

API: OpenWeatherMap for weather data.

Environment: Securely managed with python-dotenv.

🚀 **Getting Started:** A Step-by-Step Guide
   This project requires Python 3.13.

   1. Clone or Download the Repository
      First, get the code onto your local machine.

   2. Navigate to the Project Folder
     Open your terminal and change into the weather_dashboard directory.

   cd path/to/weather_dashboard

   3. Create and Activate the Virtual Environment

  On Windows:

     py -3.13 -m venv .venv
     .venv\Scripts\activate

   On macOS / Linux:

     python3.13 -m venv .venv
     source .venv/bin/activate

  4. Install Dependencies
  Install all required packages with a single command.

    pip install -r requirements.txt

  5. Configure Your API Key
 This application requires a free API key from OpenWeatherMap.

Get Your Key: Sign up at OpenWeatherMap.org and find your API key on your dashboard.

Configure: In the project folder, rename the .env.example file to .env. 
Open this new .env file and paste in your key:

    OPENWEATHER_API_KEY='your-actual-api-key-goes-here'

6. Run the Application
Once setup is complete, run the following command in your terminal:

        flask run
OR
       
        python app.py


The application will now be running. Open your web browser and go to:

     http://12.0.0.1:5000

