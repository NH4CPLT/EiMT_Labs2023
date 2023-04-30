import React from 'react';

function Header(props) {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-dark">
        <a className="navbar-brand" href="/">Book Library</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
          aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/books">Books</a>
            </li>
            <li className="nav-item active">
            <a className="nav-link" href="/categories">Categories</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header;
