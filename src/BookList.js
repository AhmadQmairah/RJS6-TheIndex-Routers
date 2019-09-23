import React, { Component } from "react";
import SearchBar from "./SearchBar";
import BookRow from "./BookRow";

class BookList extends Component {
  state = {
    BookList: this.props.books,
    filteredBooks: this.props.books
  };

  filterBooks = query => {
    query = query.toLowerCase();

    let FilterList = this.state.BookList.filter(book => {
      let title = book.title;
      return title.toLowerCase().includes(query);
    });

    this.setState({ filteredBooks: FilterList });
  };
  filterColor = () => {
    return this.state.BookList.filter(book => {
      return book.color.toLowerCase().includes(this.props.match.params.color);
    });
  };

  getbooklist = () => {
    let filterlist = this.state.filteredBooks;
    if (this.props.match.params.color) {
      filterlist = this.filterColor();
    }

    return filterlist.map(book => {
      return <BookRow book={book} filter={this.props.filter} />;
    });
  };

  render() {
    return (
      <div>
        <SearchBar filter={this.filterBooks} />
        {this.getbooklist()}
      </div>
    );
  }
}

export default BookList;
