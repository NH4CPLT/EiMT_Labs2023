package com.example.booklibrary.repositories;

import com.example.booklibrary.models.Author;
import com.example.booklibrary.models.Book;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface AuthorRepository extends JpaRepository<Author, Long> {

    Optional<Author> findById(Long id);

    @EntityGraph(type = EntityGraph.EntityGraphType.LOAD,
            attributePaths = {"country"})
    @Query("select a from Author a")
    List<Book> loadAll();

}
