package com.example.booklibrary.config;

import com.example.booklibrary.models.Book;
import jakarta.annotation.PostConstruct;
import com.example.booklibrary.models.Author;
import com.example.booklibrary.models.Country;
import com.example.booklibrary.models.enumerations.Category;
import org.springframework.stereotype.Component;
import com.example.booklibrary.services.AuthorService;
import com.example.booklibrary.services.BookService;
import com.example.booklibrary.services.CountryService;

import java.util.List;

@Component
public class DataHolder {

    private final AuthorService authorService;
    private final BookService bookService;
    private final CountryService countryService;

    public DataHolder(AuthorService authorService, BookService bookService, CountryService countryService) {
        this.authorService = authorService;
        this.bookService = bookService;
        this.countryService = countryService;
    }

    @PostConstruct
    public void init(){
        this.countryService.save(new Country("Barcelona", "Europe"));
        this.countryService.save(new Country("USA", "North America"));
        this.countryService.save(new Country("Serbia", "Europe"));

        List<Country> country = this.countryService.findAll();

        this.authorService.save(new Author("Pablo", "Neruda", country.get(0)));
        this.authorService.save(new Author("Edgar", "Allan Poe", country.get(1)));
        this.authorService.save(new Author("Ivo", "Andric", country.get(2)));

        List<Author> author = this.authorService.findAll();

        this.bookService.save(new Book("Book1", Category.BIOGRAPHY,2,author.get(0)));
        this.bookService.save(new Book("Book2", Category.BIOGRAPHY,3,author.get(1)));
        this.bookService.save(new Book("Book3", Category.BIOGRAPHY,1,author.get(2)));

        this.bookService.save(new Book("Book4", Category.DRAMA,2,author.get(0)));
        this.bookService.save(new Book("Book5", Category.THRILLER,3,author.get(1)));
        this.bookService.save(new Book("Book6", Category.DRAMA,1,author.get(2)));

        this.bookService.save(new Book("Book7", Category.THRILLER,2,author.get(0)));
        this.bookService.save(new Book("Book8", Category.HISTORY,3,author.get(1)));
        this.bookService.save(new Book("Book9", Category.NOVEL,1,author.get(2)));
    }
}