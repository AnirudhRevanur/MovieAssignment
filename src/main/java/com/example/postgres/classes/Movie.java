package com.example.postgres.classes;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import java.time.Instant;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name = "movie")
public class Movie {
    @Id
    @GeneratedValue
    private Long id;

    @CreationTimestamp
    private Instant created_at;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "release_year", nullable = false)
    private int releaseYear;

    @Column(name = "genre", nullable = false)
    private String genre;

    @Column(name = "director", nullable = false)
    private String director;


    // relationships
    @OneToMany(mappedBy = "movie", fetch = FetchType.EAGER)
    @JsonManagedReference(value = "review-movie")
    private List<Review> reviews;
}


