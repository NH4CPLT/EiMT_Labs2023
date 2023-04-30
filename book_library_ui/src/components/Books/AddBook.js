import React from 'react';
import { useHistory } from 'react-router-dom';

function AddBook(props) {

  const categories = [
    'NOVEL',
    'THRILLER',
    'HISTORY',
    'FANTASY',
    'BIOGRAPHY',
    'CLASSICS',
    'DRAMA'
  ]

  const history = useHistory();
  const [formData, updateFormData] = React.useState({
    id: '',
    name: '',
    category: 0,
    availableCopies: 0,
    author: 1
  })

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    })
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    const name = formData.name;
    const category = formData.category;
    const availableCopies = formData.availableCopies;
    const author = formData.author;

    props.onAddBook(name, category, availableCopies, author);
    alert("Book Added!");
    history.push("/books");
    window.location.reload()
  }

  return (
    <div className="row mt-5">
      <div className="col-md-5">
        <form onSubmit={onFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Book name</label>
            <input type="text"
              className="form-control"
              id="name"
              name="name"
              required
              placeholder="Enter product name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Available Copies</label>
            <input type="text"
              className="form-control"
              id="availableCopies"
              name="availableCopies"
              placeholder="Available Copies"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Author</label>
            <select name="author" className="form-control" onChange={handleChange}>
              {props.authors.map((term) =>
                <option key={term.id} value={term.id}>{term.name}</option>
              )}
            </select>
          </div>
          <div className="form-group">
            <label>Category</label>
            <select name="category" className="form-control" onChange={handleChange}>
              {categories.map((term, index) =>
                <option key={index} value={index}>{term}</option>
              )}
            </select>
          </div>
          <button id="submit" type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddBook;
