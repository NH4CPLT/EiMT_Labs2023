package com.example.booklibrary.services.impl;

import com.example.booklibrary.models.Country;
import org.springframework.stereotype.Service;
import com.example.booklibrary.repositories.CountryRepository;
import com.example.booklibrary.services.CountryService;

import java.util.List;
import java.util.Optional;

@Service
public class CountryServiceImpl implements CountryService {

    private final CountryRepository countryRepository;

    public CountryServiceImpl(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    @Override
    public Optional<Country> save(String surname, String continent) {
        return Optional.of(this.countryRepository.save(new Country(surname,continent)));
    }

    @Override
    public Optional<Country> save(Country c) {
        return Optional.of(this.countryRepository.save(c));
    }

    @Override
    public List<Country> findAll() {
        return this.countryRepository.findAll();
    }
}
