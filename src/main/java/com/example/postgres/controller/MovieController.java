package com.example.postgres.controller;

import com.example.postgres.classes.Movie;
import com.example.postgres.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/movies")
@CrossOrigin(origins = "http://localhost:3000")
public class MovieController
{
    @Autowired
    private MovieRepository movieRepository;

    @PostMapping("")
    public Movie postsNewMovie(
            @RequestBody Movie movie
    ){
        return movieRepository.save(movie);
    }

    @GetMapping("")
    public List<Movie> findAllMovies()
    {
        return movieRepository.findAll();
    }

    @GetMapping("/{movie-id}")
    public Movie findByMovieId(
            @PathVariable("movie-id") Long id
    )
    {
        return movieRepository.findById(id).orElse(null);

    }

    @DeleteMapping("")
    public ResponseEntity<String> deleteAllMovies() {
        movieRepository.deleteAll();
        String message = "All Movies have been successfully deleted.";
        return ResponseEntity.ok().body(message);
    }

    @DeleteMapping("/{movie-id}")
    public ResponseEntity<String> deleteMovieById(
            @PathVariable("movie-id") Long id
    ) {
        movieRepository.deleteById(id);
        String message = "Movie with id " + id + " has been successfully deleted.";
        return ResponseEntity.ok().body(message);
    }

    @PutMapping("/{movie-id}")
    public ResponseEntity<Movie> updateMovie(
            @PathVariable("movie-id") Long id,
            @RequestBody Movie movie
    ) {
        Movie movieToUpdate = movieRepository.findById(id).orElse(null);
        if (movieToUpdate == null) {
            return ResponseEntity.notFound().build();
        }
        movieToUpdate.setTitle(movie.getTitle());
        movieToUpdate.setGenre(movie.getGenre());
        movieToUpdate.setDirector(movie.getDirector());
        Movie updatedMovie = movieRepository.save(movieToUpdate);
        return ResponseEntity.ok(updatedMovie);
    }
}

