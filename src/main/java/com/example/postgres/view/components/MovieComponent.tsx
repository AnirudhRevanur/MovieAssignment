"use client";

import { Movie, PostReview } from "@/utils/types";

async function postReview(data: PostReview) {
	const url = "http://localhost:8080/reviews";

	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				accept: "*/*",
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		const jsonResponse = await response.json();
		console.log(jsonResponse); // Assuming you want to log the response

		return jsonResponse;
	} catch (error) {
		console.error("Error:", error);
	}
}

function MovieComponent({ movies }: { movies: Movie[] }) {
	const movieElements = movies.map((movie: Movie) => {
		async function SubmitReview(event: any) {
			event.preventDefault();
			const form = event.target;
			const formData = new FormData(form);
			const review = {
				rating: formData.get("rating"),
				description: formData.get("description"),
			};

			const finalReview = {
				rating: parseInt(review.rating as string),
				description: review.description as string,
				movie: {
					id: movie.id,
				},
				user: {
					id: 1,
				},
			};

			const response = await postReview(finalReview);
		}

		const reviewElements = movie.reviews.map((review) => {
			return (
				<div
					key={review.id}
					className="flex flex-col gap-2 w-full p-2 bg-slate-100"
				>
					<div className="flex justify-between">
						<div className="font-bold">{review.rating} stars</div>
					</div>
					<div className="italic">{review.description}</div>
				</div>
			);
		});

		return (
			<div
				key={movie.id}
				className="flex flex-col w-full gap-8 p-6 border-2 border-black rounded-2xl"
			>
				<div className="flex flex-col">
					<div className="flex justify-center items-center flex-col gap-3">
						<div className="text-3xl font-semibold">{movie.title}</div>
						<div className=" italic"><span className="text-[#b7990d]">Genre:</span> {movie.genre}</div>
					</div>
					<div className="flex justify-between">
						<div><span className="text-[#b7990d]">Directed by: </span>{movie.director}</div>
						<div><span className="text-[#b7990d]">Release Year: </span>{movie.releaseYear}</div>
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<div className="flex flex-col gap-2 overflow-auto h-60">{reviewElements}</div>
					<div className="font-bold text-xl">Add a rating</div>
					<form
						onSubmit={SubmitReview}
						className="flex flex-col gap-4"
					>
						<div className="flex flex-col gap-2">
							<label htmlFor="rating">Rating</label>
							<select
								name="rating"
								id="rating"
								className="border-2 border-black p-2 bg-gray-700 rounded-lg"
							>
								<option value="1">1 star</option>
								<option value="2">2 stars</option>
								<option value="3">3 stars</option>
								<option value="4">4 stars</option>
								<option value="5">5 stars</option>
							</select>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="description">Review</label>
							<textarea
								name="description"
								id="description"
								className="border-2 border-black p-2 bg-gray-700 rounded-lg"
							></textarea>
						</div>
						<button
							type="submit"
							className="bg-[#2c8c99] text-white p-2 rounded-md"
						>
							Submit Review
						</button>
					</form>
				</div>
			</div>
		);
	});

	return (
		<div className="w-full justify-center flex flex-col gap-8">
			{movieElements}
		</div>
	);
}

export default MovieComponent;
