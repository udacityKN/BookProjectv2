import React, { Component } from 'react'
//++ Imported router package
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
//++ Imported prop types for data
import PropTypes from 'prop-types'


class BookListPage extends Component{


  render() {
    return (
      <div className="app">
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
					<ol className="books-grid">
					{this.props.bookList.filter((book) => {return book.shelf === "currentlyReading"} ).map((book) => (
					 <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                             <img className="book-cover"  src={book.imageLinks.thumbnail} style={{ width: 128, height: 193 }} alt={book.title + "'s book cover"}></img>
                            <div className="book-shelf-changer">
                              <select onChange={() => this.props.onMoveBook(book,"wantToRead")}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title" >{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
						  
                        </div>
                      </li>
					))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                   <ol className="books-grid">
					{this.props.bookList.filter((book) => {return book.shelf === "wantToRead"} ).map((book) => (
					 <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                             <img className="book-cover"  src={book.imageLinks.thumbnail} style={{ width: 128, height: 193 }} alt={book.title + "'s book cover"}></img>
                            <div className="book-shelf-changer">
                              <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title" >{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
						  
                        </div>
                      </li>
					))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
					{this.props.bookList.filter((book) => {return book.shelf === "read"} ).map((book) => (
					 <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                             <img className="book-cover"  src={book.imageLinks.thumbnail} style={{ width: 128, height: 193 }} alt={book.title + "'s book cover"}></img>
                            <div className="book-shelf-changer">
                              <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title" >{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
						  
                        </div>
                      </li>
					))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to="/SearchPage">Add a book</Link>
            </div>
          </div>
      </div>
    )
  }
}


BookListPage.propTypes={
  bookList: PropTypes.array.isRequired,
  onDeleteBook: PropTypes.func.isRequired
}

export default BookListPage

//https://hackernoon.com/accessing-nested-objects-in-javascript-f02f1bd6387f