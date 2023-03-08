import React from "react";

const Booklist = ({ setBook, book, books, setListUpdated }) => {
  const handleDelete = (id) => {
    const requestInit = {
      method: "DELETE",
    };
    fetch("http://localhost:9999/api/" + id, requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));

    setListUpdated(true);
  };

  let { title, author, edition } = book;

  const handleUpdate = (id) => {
    edition = parseInt(edition, 10);

    if (title === "" || author === "" || edition <= 0) {
      alert("All fields are required");
      return;
    }

    const requestInit = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    };
    fetch("http://localhost:9999/api/" + id, requestInit)
      .then((res) => res.text())
      .then((res) => alert(res));
  
  setBook({ title: "", author: "", edition: 0 });

  setListUpdated(true);
};
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
        {books.map((book) => (
          <tr key={book.BookID}>
            <td className="text-center fw-bold">{book.BookID}</td>
            <td>{book.Title}</td>
            <td>{book.Author}</td>
            <td className="text-center">{book.Edition}</td>
            <td>
              <div className="mb-3">
                <button
                  onClick={() => handleDelete(book.BookID)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </div>
              <div className="mb-3">
                <button
                  onClick={() => handleUpdate(book.BookID)}
                  className="btn btn-primary btn-sm"
                >
                  UPDATE
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Booklist;
