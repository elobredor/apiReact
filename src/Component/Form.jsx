import React from "react";

const Form = ({ book, setBook }) => {
  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };
  let { title, author, edition } = book;

  const handleSubmit = () => {
    edition = parseInt(edition, 10);
    //data validation
    if (title === "" || author === "" || edition < 0) {
      alert("All fields are required");
      return;
    }

    // query
    const requestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    };

    fetch("http://localhost:9999/api", requestInit).then((res) => res.text()).then(res=>alert(res));

    setBook({
      title: "",
      author: "",
      edition: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label fw-bold">
          Title
        </label>
        <input
          value={title}
          onChange={handleChange}
          className="form-control fw-bold"
          type="text"
          name="title"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="author" className="form-label fw-bold">
          Author
        </label>
        <input
          value={author}
          onChange={handleChange}
          className="form-control fw-bold"
          type="text"
          name="author"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="edition" className="form-label fw-bold">
          Edition
        </label>
        <input
          value={edition}
          onChange={handleChange}
          type="number"
          className="form-control"
          name="edition"
        />
      </div>

      <button
        onSubmit={handleSubmit}
        className="btn btn-dark fw-bold"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
export default Form;
