import React from "react";

const Booklist = ({ books }) => {
  return (
    <table className="table">
      <thead>
        <tr className="table-dark">
          <th>BookID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Edition</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.BookID}>
            <th>{book.BookID}</th>
            <th>{book.Title}</th>
            <th>{book.Author}</th>
            <th>{book.Edition}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Booklist;
