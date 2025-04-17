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
