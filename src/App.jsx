import React, { Fragment, useEffect, useState } from "react";
import Nav from "./Component/Nav";
import Booklist from "./Component/Booklist";
import Form from "./Component/Form";

function App() {

  const [book, setBook] = useState({
    title: "",
    author: "",
    edition: 0,
  });

  const [books, setBooks] = useState([]);

  const [listUpdated, setListUpdated]=useState(false)
  
 
  useEffect(() => {
    const getBooks = () => {
      fetch("http://localhost:9999/api")
        .then((res) => res.json())
        .then((res) => setBooks(res));
    };
    getBooks();
    setListUpdated(false)
  }, [listUpdated]);

  return (
    <Fragment>
      <Nav brand="PERSONAL LIBRARY" />
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{ textAlign: "center" }}>Book list</h2>
            <Booklist books={books} book={book} setBook={setBook} setListUpdated={setListUpdated}/>
          </div>
          <div className="col-5">
            <h2 style={{ textAlign: "center" }}>Book form</h2>
            <Form book={book} setBook={setBook} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
