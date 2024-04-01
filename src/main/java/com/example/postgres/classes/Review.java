package com.example.postgres.classes;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name = "review")
public class Review {
    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "rating", nullable = false)
    private int rating;

    @Column(name = "description", nullable = false)
    private String description;

    @CreationTimestamp
    private Instant created_at;

    // relationships
    @ManyToOne
    @JoinColumn(name="movie_id")
    @JsonBackReference(value="review-movie")
    private Movie movie;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonBackReference(value="review-user")
    private User user;
}