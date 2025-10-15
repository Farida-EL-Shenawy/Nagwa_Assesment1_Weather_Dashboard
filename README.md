🌦️ WeatherGlimpse: A Dynamic, Animated Weather Dashboard
Overview
WeatherGlimpse is a modern, responsive single-page web application that delivers a visually immersive and user-friendly weather forecast. Developed with a Python Flask backend, this dashboard provides a polished and informative experience, designed to be a tool users would genuinely want to use for a quick and beautiful weather check.

This project was built to showcase "vibe coding"—the art of collaborating with an AI assistant to rapidly prototype, debug complex issues (like CSS layering and browser caching), and iteratively build a spectacular, functional tool.

💡 How It Works: A Technical Glimpse
The application's architecture is designed to be both robust and performant:

Backend (Python & Flask): A lightweight Flask server exposes a simple REST API. It handles all communication with the external OpenWeatherMap API, securely managing the API key and sending clean JSON responses to the front end.

Frontend (Vanilla JavaScript):

On load, it prioritizes high-accuracy GPS for the most precise location data.

It gracefully handles errors (like a user denying location access) by seamlessly presenting the manual search form.

All UI updates are triggered by asynchronous fetch calls, ensuring a smooth, non-blocking user experience.

Visuals (Pure CSS Animations): The immersive experience is powered entirely by self-contained CSS, requiring zero external file downloads.

A dedicated animation layer renders beautiful, looping animations (a shining sun, moving SVG clouds, falling rain) that logically match the weather description.

The modern "glassmorphism" UI is achieved with backdrop-filter, creating a stunning frosted-glass effect.

All elements animate into view sequentially for a polished, professional feel.

✨ Key Features
High-Accuracy Geolocation: Prioritizes the browser's GPS for precise, real-time location detection.

Intelligent Animated Backgrounds: Pure CSS animations logically and beautifully change to reflect the current weather (e.g., a shining sun for clear skies, moving clouds for overcast, and both for scattered clouds).

Modern Glassmorphism UI: A sleek, semi-transparent "frosted glass" interface for both the weather card and search form.

Polished Animations: All UI elements animate into view sequentially for a professional feel.

Comprehensive Data: Clearly displays Temperature, Humidity, Wind Speed, and a formatted Weather Description.

Robust Error Handling: Gracefully handles invalid city names and geolocation failures with clear user feedback.

Fully Responsive: The layout adapts elegantly to smaller screen heights, ensuring all content remains visible without zooming.

🚀 Getting Started: Setup and Installation
This project requires Python 3.13.

1. Set Up The Project
Open your terminal and navigate to the weather_dashboard directory.

cd path/to/weather_dashboard

2. Create and Activate the Virtual Environment
On Windows:

py -3.13 -m venv .venv
.venv\Scripts\activate

On macOS / Linux:

python3.13 -m venv .venv
source .venv/bin/activate

3. Install Dependencies
Install all required packages with a single command.

pip install -r requirements.txt

⚙️ Configuration
This application requires a free API key from OpenWeatherMap.

Get Your API Key:

Sign up at OpenWeatherMap.org.

Navigate to the "API keys" section on your dashboard and copy your key.

Configure Your Environment:

In the project folder, rename the .env.example file to .env.

Open the new .env file and paste your API key. It should look like this:

OPENWEATHER_API_KEY='your-actual-api-key-goes-here'

▶️ How to Run the Application
Once setup and configuration are complete, run the following command in your terminal:

flask run

The application will start. Open your web browser and go to:

http://127.0.0.1:5000