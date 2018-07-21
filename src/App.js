import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
//++ Imported created SearchPage
import SearchPage from './SearchPage'
//++ Imported created BookListPage
import BookListPage from './BookListPage'
//++ Imported router package
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
//++ Imported BooksAPI
import * as BooksAPI from './BooksAPI'
//++ Imported prop types for data
import PropTypes from 'prop-types'

class BooksApp extends React.Component {

state = { bookList : [ ] }

removeBook = (bookList) => {
  this.setState((state) => ({
    bookList: state.bookList.filter((b) => b.id !== bookList.id)
  }))
  //this.setState({}) or this when applicable
}

moveBook = (book, shelf) => {
	
	let copyState = JSON.parse(JSON.stringify(this.state.bookList))
	let index = this.state.bookList.findIndex( (movedBook) => (movedBook.id === book.id))
	
	copyState[index].shelf = shelf
	console.log(shelf)
	this.setState((state) => ({
		bookList:state.bookList = copyState
	}))
	
}

  componentDidMount(){
    BooksAPI.getAll().then((bookList) => {
    	this.setState({ bookList })
		console.log(bookList)
  	})
  }

  render() {
    return (
	  //++ Modified so that the original code was more componentized and makes use of routing  
	<div className="app">
		<Route exact path="/" render={ () => (<BookListPage onMoveBook={this.moveBook} onDeleteBook={this.removeBook} bookList={this.state.bookList}/>)}/>
		<Route exact path="/SearchPage" render={ () => (<SearchPage onDeleteBook={this.removeBook} bookList={this.state.bookList}/>)}/>
		{/*<Route exact path="/SearchPage" component={SearchPage}/>*/}
		
	</div>
    )
  }
}

export default BooksApp
