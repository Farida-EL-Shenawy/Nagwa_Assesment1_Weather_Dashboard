import os
import requests
from flask import Flask, render_template, jsonify, request
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Initialize the Flask application
app = Flask(__name__)

def get_weather_data(city=None, lat=None, lon=None):
    """
    Fetches weather data from the OpenWeatherMap API.

    Args:
        city (str, optional): The name of the city. Defaults to None.
        lat (float, optional): The latitude. Defaults to None.
        lon (float, optional): The longitude. Defaults to None.

    Returns:
        dict: A dictionary containing weather data if the API call is successful,
              otherwise None.
    """
    api_key = os.getenv('OPENWEATHER_API_KEY')
    base_url = "https://api.openweathermap.org/data/2.5/weather"

    params = {
        'appid': api_key,
        'units': 'metric'  # For temperature in Celsius
    }

    if city:
        params['q'] = city
    elif lat is not None and lon is not None:
        params['lat'] = lat
        params['lon'] = lon
    else:
        # If no location is provided, we cannot proceed
        return None

    try:
        response = requests.get(base_url, params=params)
        response.raise_for_status()  # Will raise an HTTPError for bad responses (4xx or 5xx)

        if response.status_code == 200:
            data = response.json()
            weather_data = {
                'temperature': data['main']['temp'],
                'humidity': data['main']['humidity'],
                'wind_speed': round(data['wind']['speed'] * 3.6, 2), # Convert m/s to km/h
                'description': data['weather'][0]['description'].title(),
                'city_name': data['name']
            }
            return weather_data
        else:
            print(f"Error: Received status code {response.status_code}")
            return None

    except requests.exceptions.RequestException as e:
        print(f"Network error occurred: {e}")
        return None
    except KeyError as e:
        print(f"Error parsing weather data: Missing key {e}")
        return None


@app.route('/')
def index():
    """Renders the main page."""
    # This will be updated later to fetch and display weather data
    return render_template('index.html')

# API route to get weather by city name
@app.route('/api/weather/city/<city>')
def get_weather_by_city(city):
    """API endpoint to fetch weather data by city name."""
    weather_data = get_weather_data(city=city)
    if weather_data:
        return jsonify(weather_data)
    else:
        return jsonify({'error': 'Data not found or invalid city'}), 404

# API route to get weather by coordinates
@app.route('/api/weather/coords')
def get_weather_by_coords():
    """API endpoint to fetch weather data by geographic coordinates."""
    try:
        lat = float(request.args.get('lat'))
        lon = float(request.args.get('lon'))
    except (TypeError, ValueError):
        return jsonify({'error': 'Invalid or missing latitude/longitude parameters'}), 400

    weather_data = get_weather_data(lat=lat, lon=lon)
    if weather_data:
        return jsonify(weather_data)
    else:
        return jsonify({'error': 'Data not found for the given coordinates'}), 404


if __name__ == '__main__':
    # Runs the app in debug mode for development
    app.run(debug=True)
