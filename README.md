# NASA Photo of the Day

A one-page application that fetches and displays NASA's Photo of the Day, along with its title and caption. The photo serves as the background, with the title and caption positioned at the bottom.

![FireShot Capture 111 - Nasa Photo of the Day - 127 0 0 1](https://github.com/user-attachments/assets/8d7f45bc-92c8-4942-a2b2-11f1dc3698aa)

[View](https://nasa-api-frontend-gkjr.onrender.com/)


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
3. Open the HTML file in the browser. Endure the backend is running first.

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

## Lesson

This project required deploy the backend and front end separated. I run to some obstacles but was manage to understand and learn how to deploy my nodejs as a web service and my frontend as a static website. Without forgetting to change the URL after deployment to make sure the sata is retrieve and read correctly.

## Learn More

Explore the NASA API [here](https://api.nasa.gov).

## License

MIT License. See LICENSE file for details.
