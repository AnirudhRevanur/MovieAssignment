import MovieComponent from "@/components/MovieComponent";
import { Movie } from "@/utils/types";
import { cache } from "react";

async function getMovies() {
	const response = await fetch("http://localhost:8080/movies", {
		cache: "no-cache",
	});
	const movies = await response.json();
	return movies;


	}

export default async function Home() {
	const movies: Movie[] = await getMovies();
	console.log(movies);

	return (
		<div className="w-full items-start justify-center flex flex-col gap-8 p-20">
			<div className="text-4xl">Movies</div>
			<MovieComponent movies={movies} />
		</div>
	);
}
