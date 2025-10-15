🌦️ WeatherGlimpse: A Dynamic, Animated Weather Dashboard
A modern, responsive single-page web application that delivers a visually immersive and user-friendly weather forecast, built with Python/Flask and Vanilla JavaScript.

✨ Key Features
High-Accuracy Geolocation: Prioritizes the browser's GPS for precise, real-time location detection.

Intelligent Animated Backgrounds: Pure CSS animations logically and beautifully change to reflect the current weather (e.g., a shining sun for clear skies, moving clouds for overcast, and both for scattered clouds).

Modern Glassmorphism UI: A sleek, semi-transparent "frosted glass" interface for both the weather card and search form.

Polished Animations: All UI elements animate into view sequentially for a professional feel.

Comprehensive Data: Clearly displays Temperature, Humidity, and Wind Speed.

Robust Error Handling: Gracefully handles invalid city names and geolocation failures with clear user feedback.

🚀 Quick Start Guide
This project requires Python 3.13.

1. Set Up Your Environment
Open your terminal, navigate to the weather_dashboard folder, and run the following commands to set up the environment and install dependencies.

On Windows:

py -3.13 -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt

On macOS / Linux:

python3.13 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

2. Configure Your API Key
Get Your Key: Sign up for a free account at OpenWeatherMap.org and copy your API key.

Configure: In the project folder, rename the .env.example file to .env. Open this new .env file and paste in your key:

OPENWEATHER_API_KEY='your-actual-api-key-goes-here'

3. Run the Application
Once setup is complete, run the following command in your terminal:

flask run
