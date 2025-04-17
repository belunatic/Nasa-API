const loadingText = document.getElementById("loading-text");

async function fetchPhotoOfTheDay() {
	try {
		const response = await fetch("https://nasa-api-backend-a5qj.onrender.com/");
		const data = await response.json();
		loadingText.style.display = "none";
		displayPhoto(data);
	} catch (error) {
		console.error("Error fetching the photo of the day:", error);
	}
}

/**
 * Updates the photo display on the webpage with the provided data.
 *
 * @param {Object} data - The data object containing information about the photo.
 * @param {string} data.url - The URL of the photo to be displayed.
 * @param {string} data.title - The title of the photo.
 * @param {string} data.explanation - The explanation or caption for the photo.
 */
function displayPhoto(data) {
	const photoContainer = document.getElementById("photo-container");
	const titleElement = document.getElementById("photo-title");
	const captionElement = document.getElementById("photo-caption");

	photoContainer.style.backgroundImage = `url(${data.url})`;
	photoContainer.style.backgroundSize = "cover";
	photoContainer.style.backgroundPosition = "center center";
	titleElement.textContent = data.title;
	captionElement.textContent = data.explanation;
}

document.addEventListener("DOMContentLoaded", fetchPhotoOfTheDay);
