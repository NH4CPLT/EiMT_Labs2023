package com.example.booklibrary.services;

import com.example.booklibrary.models.Author;
import com.example.booklibrary.models.Country;

import java.util.List;
import java.util.Optional;

public interface AuthorService {

    List<Author> findAll();
    Optional<Author> save(String name, String surname, Country country);
    Optional<Author> save(Author a);
}
