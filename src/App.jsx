import React, { Fragment, useEffect, useState } from "react";
import Nav from "./Component/Nav";
import Booklist from "./Component/Booklist";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBook = () => {
      fetch("http://localhost:9999/api")
        .then((res) => res.json())
        .then((res) => setBooks(res));
    };
    getBook();
  }, []);

  return (
    <Fragment>
      <Nav brand="PERSONAL LIBRARY" />
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{ textAlign: "center" }}>Book list</h2>
            <Booklist books={books} />
          </div>
          <div className="col-5">
            <h2 style={{ textAlign: "center" }}>Form</h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
