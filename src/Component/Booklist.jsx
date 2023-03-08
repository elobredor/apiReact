import React from "react";

const Booklist = ({books}) => {
   

  return (
    <table className="table">
      <thead>
        <tr className="table-dark">
          <th className="text-center">ID</th>
          <th>Title</th>
          <th>Author</th>
          <th className="text-center">Edition</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book=>
        
        <tr key={book.BookID}>
          <td className="text-center fw-bold">{book.BookID}</td>
          <td>{book.Title}</td>
          <td>{book.Author}</td>
          <td className="text-center">{book.Edition}</td>
        </tr>

        )}
      
      </tbody>
    </table>
  );
};

export default Booklist;
