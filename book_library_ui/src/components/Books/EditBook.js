import React from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function EditBook(props) {

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
  const id = useParams();
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
    const name = formData.name !== '' ? formData.name : props.book.name;
    const category = formData.category !== "" ? formData.category : props.book.category;
    const availableCopies = formData.availableCopies !== 0 ? formData.availableCopies : props.book.availableCopies;
    const author = formData.author !== 0 ? formData.author : props.book.author;
    props.onEditBook(id, name, category, availableCopies, author);
    history.push("/books");
    window.location.reload();
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
              defaultValue={props.book.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Available Copies</label>
            <input type="text"
              className="form-control"
              id="availableCopies"
              name="availableCopies"
              defaultValue={props.book.availableCopies}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Author</label>
            <select name="author" className="form-control" onChange={handleChange}>
              {props.authors.map((term) => {
                if (props.book.author !== undefined && props.book.author.id === term.id)
                  return <option key={term.id} value={props.book.author.id}>{term.name}</option>
                else return <option key={term.id} value={term.id}>{term.name}</option>
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Category</label>
            <select name="category" className="form-control" onChange={handleChange}>
              {categories.map((term, index) => {
                if (props.book.category !== undefined && props.book.category === term)
                  return <option key={index} value={props.book.category}>{term}</option>
                else return <option key={index} value={term}>{term}</option>
              })}
            </select>
          </div>
          <button id="submit" type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default EditBook;
