const apiKey = 'VuCGuqdpejYWKdEHgVCPij10REDkb5vXLhT'; // Replace with your NASA API key
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

async function fetchPhotoOfTheDay() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayPhoto(data);
    } catch (error) {
        console.error('Error fetching the photo of the day:', error);
    }
}

function displayPhoto(data) {
    const photoContainer = document.getElementById('photo-container');
    const titleElement = document.getElementById('photo-title');
    const captionElement = document.getElementById('photo-caption');

    photoContainer.style.backgroundImage = `url(${data.url})`;
    photoContainer.style.backgroundSize = 'cover';
    titleElement.textContent = data.title;
    captionElement.textContent = data.explanation;
}

document.addEventListener('DOMContentLoaded', fetchPhotoOfTheDay);