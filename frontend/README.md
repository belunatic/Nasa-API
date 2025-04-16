# NASA Photo of the Day

A one-page application that fetches and displays NASA's Photo of the Day, along with its title and caption. The photo serves as the background, with the title and caption positioned at the bottom.

## Features

- Fetches NASA's Photo of the Day using the NASA API.
- Displays the photo as the background with accompanying details.

## How to Use

### Frontend

1. Clone the repository and navigate to the project folder:
   ```bash
   git clone https://github.com/yourusername/nasa-photo-of-the-day.git
   cd nasa-photo-of-the-day/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open the HTML file in the browser. Endure the backend is running first.

### Backend

1. Navigate to the backend folder:
   ```bash
   cd nasa-photo-of-the-day/backend
   ```
2. Create a `.env` file in the backend folder and add your NASA API key and PORT:
   ```
   NASA_API_KEY=your_api_key_here
   PORT=5000
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the backend server:
   ```bash
   node --watch --env-file=.env app.js
   ```
5. Ensure the backend server is running to support API requests from the frontend.

## Learn More

Explore the NASA API [here](https://api.nasa.gov).

## License

MIT License. See LICENSE file for details.
