import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import apiService from './Repository/apiService';
import Books from './components/Books/Books';
import AddBook from './components/Books/AddBook';
import EditBook from './components/Books/EditBook';
import Categories from './components/Categories/Categories';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      authors: [],
      selectedBook: {}
    }
  }

  render() {
    return (
      <Router>
        <Header />
        <main>
          <div className="container">
            <Switch>
              <Route path="/books/add" exact render={() => <AddBook books={this.state.books} authors={this.state.authors} onAddBook={this.addBook} />} />
              <Route path="/books/:id/edit" exact render={() => <EditBook book={this.state.selectedBook} authors={this.state.authors} onEditBook={this.editBook} />} />
              <Route path="/books" exact render={() => <Books books={this.state.books} onDelete={this.deleteBook} onEdit={this.getBook} markAsTaken={this.markAsTaken} />} />
              <Route path="/categories" exact render={() => <Categories />} />
              <Route path="/" exact render={() => <Books books={this.state.books} onDelete={this.deleteBook} onEdit={this.getBook} markAsTaken={this.markAsTaken} />} />
            </Switch>
          </div>
        </main>
      </Router>
    );
  }

  componentDidMount() {
    this.loadBooks();
    this.loadAuthors();
  }

  loadBooks = () => {
    apiService.findAllBooks()
      .then((data) => {
        this.setState({
          books: data
        })
      });
  }

  loadAuthors = () => {
    apiService.findAllAuthors()
      .then((data) => {
        this.setState({
          authors: data
        })
      });
  }

  deleteBook = (id) => {
    apiService.deleteBookById(id)
      .then(() => {
        this.loadBooks();
      });
  }

  addBook = (name, category, availableCopies, author) => {
    const book = { name: name, category: category, availableCopies: availableCopies, author: author };
    apiService.saveBook(book)
      .then(() => {
        this.loadBooks();
      })
  }

  getBook = (id) => {
    apiService.findBookById(id)
      .then((data) => {
        this.setState({
          selectedBook: data
        })
      })
  }

  editBook = (id, name, category, availableCopies, author) => {
    const book = { name: name, category: category, availableCopies: availableCopies, author: author };
    apiService.saveBook(book)
      .then(() => {
        this.loadBooks();
      });
  }

  markAsTaken = (id) => {
    apiService.markBookAsTaken(id).then(() => {
      this.loadBooks();
    })
  }

}

export default App;
