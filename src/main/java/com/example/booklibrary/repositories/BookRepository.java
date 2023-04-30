package com.example.booklibrary.repositories;

import com.example.booklibrary.models.Book;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

    @EntityGraph(type = EntityGraph.EntityGraphType.FETCH,
            attributePaths = {"author"})
    @Query("select b from Book b")
    List<Book> fetchAll();

    @EntityGraph(type = EntityGraph.EntityGraphType.LOAD,
            attributePaths = {"author"})
    @Query("select b from Book b order by b.id DESC")
    List<Book> loadAll();

    Optional<Book> findByName(String name);

    Optional<Book> findById(Long id);

    void deleteByName(String name);
}
