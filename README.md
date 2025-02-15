# Book Management API

This is a simple Book Management API built with Node.js, Express, MongoDB, and Swagger for documentation. The API allows users to manage books (CRUD operations) and retrieve weather data using the OpenWeather API.

## Features
- Manage books (Create, Read, Update, Delete)
- Fetch weather data from OpenWeather API
- API documentation using Swagger

## Technologies Used
- Node.js
- Express.js
- MongoDB (Mongoose)
- Postman
- OpenWeather API

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/aigerim-lab/books
   ```
2. **Navigate to the project directory:**
   ```sh
   cd books
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```
4. **Create a `.env` file in the root directory and add the following environment variables:**
   ```env
   MONGO_URI=mongodb+srv://YOUR_MONGO_ATLAS_URI
   WEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY
   PORT=5050
   ```
5. **Start the server:**
   ```sh
   node server.js
   ```

## API Endpoints

### Books API
| Method | Endpoint      | Description          |
|--------|--------------|----------------------|
| GET    | /books       | Get all books       |
| POST   | /books       | Add a new book      |
| PUT    | /books/:id   | Update a book by ID |
| DELETE | /books/:id   | Delete a book by ID |

### Weather API
| Method | Endpoint        | Description                 |
|--------|----------------|-----------------------------|
| GET    | /weather/:city | Get weather data for a city |

## Deployment
The API is deployed on Render and accessible via:
```sh
https://weather-api-6zpf.onrender.com/weather/london
```

## Postman Collection
To test the API, import the `book_management_api.json` file into Postman.



