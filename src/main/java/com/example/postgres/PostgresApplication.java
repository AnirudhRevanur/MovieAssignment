package com.example.postgres;

import com.example.postgres.classes.Movie;
import com.example.postgres.classes.User;
import com.example.postgres.repository.MovieRepository;
import com.example.postgres.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class PostgresApplication {

	@Autowired
	private MovieRepository movieRepository;

	public static void main(String[] args) {
		SpringApplication.run(PostgresApplication.class, args);
	}


}
