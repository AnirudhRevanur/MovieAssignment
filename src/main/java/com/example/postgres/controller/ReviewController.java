package com.example.postgres.controller;

import com.example.postgres.classes.Review;
import com.example.postgres.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/reviews")
@CrossOrigin(origins = "http://localhost:3000")
public class ReviewController
{
    @Autowired
    private ReviewRepository reviewRepository;

    @PostMapping("")
    public Review postsNewReview(
            @RequestBody Review review
    ){
        return reviewRepository.save(review);
    }

    @GetMapping("")
    public List<Review> findAllReviews()
    {
        return reviewRepository.findAll();
    }

    @GetMapping("/{review-id}")
    public Review findByReviewId(
            @PathVariable("review-id") Long id
    )
    {
        return reviewRepository.findById(id).orElse(null);

    }

    @DeleteMapping("")
    public ResponseEntity<String> deleteAllReviews() {
        reviewRepository.deleteAll();
        String message = "All Reviews have been successfully deleted.";
        return ResponseEntity.ok().body(message);
    }

    @DeleteMapping("/{review-id}")
    public ResponseEntity<String> deleteReviewById(
            @PathVariable("review-id") Long id
    ) {
        reviewRepository.deleteById(id);
        String message = "Review with id " + id + " has been successfully deleted.";
        return ResponseEntity.ok().body(message);
    }

    @PutMapping("/{review-id}")
    public ResponseEntity<Review> updateReview(
            @PathVariable("review-id") Long id,
            @RequestBody Review review
    ) {
        Review updatedReview = reviewRepository.findById(id).orElse(null);
        if (updatedReview == null) {
            return ResponseEntity.notFound().build();
        }
        updatedReview.setDescription(review.getDescription());
        updatedReview.setRating(review.getRating());
        reviewRepository.save(updatedReview);
        return ResponseEntity.ok(updatedReview);
    }
}