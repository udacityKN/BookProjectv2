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
	
    query:""
  }

	updateQuery = (query) => {
      this.setState({query: query.trimStart()})
	  
	  if(this.state.query.length > 1){
		    
			BooksAPI.search(this.state.query,20).then((books) => {
				if(books.length > 0){
					this.setState({ books })
					console.log(books)	
				}
				
			})
	  }
	if(this.state.query.length <= 1){
		this.setState({ books:[] })
    }
	}
	
	showBlankImage(e){
		//e.target.src = "https://media.istockphoto.com/photos/blank-book-cover-isolated-on-white-picture-id478720334?k=6&m=478720334&s=612x612&w=0&h=TTN16jGbgtRC4xpW_F3eWHFdZjqQul_gKm5pcPFcabw="
		this.setState({ books:[] })
		
	}
	
	onError() {
		alert('Error !');
	}

	
	componentDidMount(){

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
						  
                             {/*book.imageLinks.thumbnail !== 'undefined' && <img className="book-cover"  src={book.imageLinks.thumbnail} style={{ width: 128, height: 193 }} alt={book.title + "'s book cover"}></img>*/}
								 {(book.imageLinks !== "undefined" && book.imageLinks.thumbnail !== "undefined") ?  "true" : "false"}
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

//https://stackoverflow.com/questions/38527759/how-to-check-for-broken-images-in-react-js

//https://stackoverflow.com/questions/38527759/how-to-check-for-broken-images-in-react-js

//https://stackoverflow.com/questions/34097560/react-js-replace-img-src-onerror

//https://stackoverflow.com/questions/38626629/onerror-in-img-tag-in-react

//https://stackoverflow.com/questions/36418806/react-use-img-onerror

//https://knowledge.udacity.com/questions/3543