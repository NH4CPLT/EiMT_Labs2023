package com.example.booklibrary.services.impl;

import com.example.booklibrary.repositories.AuthorRepository;
import com.example.booklibrary.models.Author;
import com.example.booklibrary.models.Country;
import org.springframework.stereotype.Service;
import com.example.booklibrary.services.AuthorService;

import java.util.List;
import java.util.Optional;

@Service
public class AuthorServiceImpl implements AuthorService {

    private final AuthorRepository authorRepository;

    public AuthorServiceImpl(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    @Override
    public List<Author> findAll() {
        return this.authorRepository.findAll();
    }

    @Override
    public Optional<Author> save(String name, String surname, Country country) {
        return Optional.of(this.authorRepository.save(new Author(name,surname,country)));
    }

    @Override
    public Optional<Author> save(Author a) {
        return Optional.of(this.authorRepository.save(a));
    }
}
