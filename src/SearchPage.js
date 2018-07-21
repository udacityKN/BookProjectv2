import React, { Component } from 'react'
//++ Imported router package
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
//++ Imported prop types for data
import PropTypes from 'prop-types'
//++ Imported BooksAPI
import * as BooksAPI from './BooksAPI'
//++ Imported packages for search functionality
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class SearchPage extends Component{
  state = {
    books:[],
	
    query:'android'
  }

	updateQuery = (query) => {
      this.setState({query: query.trim()})
	  
	  if(this.state.query.length > 2){
		    
			BooksAPI.search(this.state.query,20).then((books) => {
				this.setState({ books })
				console.log(books)
			})
	  }	
    }
	
	componentDidMount(){
	    BooksAPI.search(this.state.query,20).then((books) => {
    	this.setState({ books })
		console.log(books)
  	})
	
  }
	
 	render() {
	/*	
      let showBooks
      if (this.state.query){
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      //match.test('andorid')
      showBooks = this.props.bookList.filter((books) => match.test(this.books.title))
    	}
      else{
        showBooks = this.props.bookList //need fixing
      }
		showBooks.sort(sortBy('name'))
      */
      return (
        <div className="search-books">
            <div className="search-books-bar">
        		{/*-- Modified for routing, changed to Link
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              */}
        	<Link to="/" className="close-search"></Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event)  => this.updateQuery(event.target.value)}/>
					{/*{JSON.stringify(this.state)}*/}
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
			  {this.state.books.map((book) => (
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
      )
    }
}

SearchPage.propTypes={
  bookList: PropTypes.array.isRequired,
  onDeleteBook: PropTypes.func.isRequired
}

export default SearchPage