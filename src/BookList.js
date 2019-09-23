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

    let filteredBooks = this.state.BookList.filter(book => {
      let title = book.title;
      return title.toLowerCase().includes(query);
    });

    this.setState({ filteredBooks: filteredBooks });
  };
  filterColors = () => {
    let filteredBooks = this.state.filteredBooks.filter(book => {
      return book.color.toLowerCase().includes(this.props.match.params.color);
    });

    this.setState({ filteredBooks: filteredBooks });
  };

  componentDidMount() {
    this.filterColors();
  }
  componentDidUpdate() {
    this.booklist = this.state.filteredBooks.map(book => {
      return <BookRow book={book} filtercolor={this.filterColors} />;
    });
  }

  filter = this.state.filteredBooks.filter(book => {
    return book.color.toLowerCase().includes(this.props.match.params.color);
  });

  booklist = this.filter.map(book => {
    return <BookRow book={book} filtercolor={this.filterColors} />;
  });
  render() {
    return (
      <div>
        <SearchBar onChange={this.filterBooks} />
        {this.booklist}
      </div>
    );
  }
}

export default BookList;
