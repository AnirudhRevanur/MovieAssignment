const descriptions = [
	"Riveting plot and compelling characters make this a must-watch.",
	"A rollercoaster of emotions from start to finish.",
	"Captivating storytelling that keeps you on the edge of your seat.",
	"An immersive experience that transports you to another world.",
	"Masterful direction combined with stellar performances.",
	"A thought-provoking exploration of humanity.",
	"Unforgettable moments that linger long after the credits roll.",
	"A visual feast for the eyes with stunning cinematography.",
	"Heartwarming and uplifting, perfect for a feel-good movie night.",
	"Thrilling action sequences that leave you breathless.",
	"A modern classic that will stand the test of time.",
	"Quirky and charming, with a unique take on the genre.",
	"Gripping suspense that keeps you guessing until the end.",
	"A celebration of friendship, love, and the human spirit.",
	"Witty dialogue and sharp humor that will have you laughing out loud.",
	"A poignant reflection on life's complexities.",
	"A compelling journey of self-discovery and redemption.",
	"Atmospheric and hauntingly beautiful.",
	"A fresh perspective that challenges conventions.",
	"A mesmerizing performance by the lead actor/actress.",
	"A richly layered narrative with unexpected twists.",
	"A feel-good movie with a powerful message.",
	"A true cinematic gem that demands multiple viewings.",
	"A captivating blend of drama, romance, and intrigue.",
	"A thrilling ride from start to finish.",
	"A poignant exploration of love and loss.",
	"A visually stunning masterpiece that pushes boundaries.",
	"A gripping tale of survival against all odds.",
	"A heart-pounding adrenaline rush that leaves you wanting more.",
	"A compelling ensemble cast that brings the story to life.",
	"A fascinating glimpse into a different culture or time period.",
	"A powerful indictment of social injustice.",
	"A heartwarming story of unlikely heroes.",
	"A dark and twisted thriller that will leave you on the edge of your seat.",
	"A poignant reminder of the fragility of life.",
	"A feel-good comedy that delivers big laughs.",
	"A mesmerizing soundtrack that enhances the viewing experience.",
	"A gripping mystery with unexpected twists and turns.",
	"A visually stunning epic that transports you to another world.",
	"A moving tribute to the human spirit's resilience.",
	"A thrilling adventure that will appeal to audiences of all ages.",
	"A character-driven drama with depth and complexity.",
	"A pulse-pounding action movie that doesn't disappoint.",
	"A heartwarming tale of love, family, and redemption.",
	"A visually arresting film that pushes the boundaries of storytelling.",
	"A poignant examination of the human condition.",
	"A thought-provoking exploration of morality and ethics.",
	"A stylish and visually inventive film that dazzles the senses.",
	"A captivating romance that tugs at the heartstrings.",
	"A timeless classic that remains as relevant today as ever.",
];

async function createReview(movieId, description) {
	const userId = Math.floor(Math.random() * 15) + 4;
	const reviewData = {
		rating: Math.floor(Math.random() * 5) + 1,
		description: description,
		movie: {
			id: movieId,
		},
		user: {
			id: userId,
		},
	};

	const response = await fetch("http://localhost:8080/reviews", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(reviewData),
	});

    if (response.ok) {
        console.log("------------------");
        console.log(`Review for movie ID ${movieId} created successfully.`);
        console.log(response)
        console.log("------------------")
	} else {
		console.error(`Failed to create review for movie ID ${movieId}.`);
	}
}

async function createReviewsForMovies() {
	for (let movieId = 1; movieId <= 45; movieId++) {
		const numReviews = Math.floor(Math.random() * 7) + 4;
		for (let i = 0; i < numReviews; i++) {
			const randomIndex = Math.floor(Math.random() * descriptions.length);
			const randomDescription = descriptions[randomIndex];
			await createReview(movieId, randomDescription);
		}
	}
}

createReviewsForMovies();
