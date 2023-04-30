import React from "react";
import BookItem from './BookItem'
import ReactPaginate from 'react-paginate';
import "../Books/Books.css";

class Books extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      size: 5
    }
  }

  render() {
    const offset = this.state.size * this.state.page;
    const nextPageOffset = offset + this.state.size;
    const pageCount = Math.ceil(this.props.books.length / this.state.size);
    const books = this.getBooksPage(offset, nextPageOffset);

    return (
      <div className={"container mm-4 mt-5"}>
        <div className={"row"}>
          <div className={"table-responsive"}>
            <table className={"table table-striped"}>
              <thead>
                <tr>
                  <th scope={"col"}>Name</th>
                  <th scope={"col"}>Category</th>
                  <th scope={"col"}>Author</th>
                  <th scope={"col"}>Available Copies</th>
                  <th scope={"col"}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {books}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col mb-3">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <a className={"btn btn-block btn-dark"} href={"/books/add"}>Add new book</a>
            </div>
          </div>
        </div>
        <ReactPaginate previousLabel={"Back"}
          nextLabel={"Next"}
          breakLabel={<a href="/#">...</a>}
          breakClassName={"break-me"}
          pageClassName={"ml-1"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination m-4 justify-content-center"}
          activeClassName={"active"} />
      </div>
    );
  }

  getBooksPage = (offset, nextPageOffset) => {
    if (!this.props.books || !Array.isArray(this.props.books)) {
      return null;
    }

    return this.props.books.filter((book, index) => {
      return index >= offset && index < nextPageOffset;
    }).map(book => {
      return (
        <BookItem key={book.id} book={book} onDelete={this.props.onDelete} onEdit={this.props.onEdit} markAsTaken={this.props.markAsTaken} />
      );
    })
  }

  handlePageClick = (data) => {
    let selected = data.selected;
    this.setState({
      page: selected
    })
  }

}

export default Books;
