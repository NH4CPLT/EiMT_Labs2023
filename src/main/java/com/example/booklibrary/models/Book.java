package com.example.booklibrary.models;

import jakarta.persistence.*;
import lombok.Data;
import com.example.booklibrary.models.enumerations.Category;

@Data
@Entity
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private Category category;

    private Integer availableCopies;

    @ManyToOne
    private Author author;

    public Book () {
    }

    public Book(String name, Category category, Integer availableCopies, Author author) {
        this.name = name;
        this.category = category;
        this.availableCopies = availableCopies;
        this.author = author;
    }
}
