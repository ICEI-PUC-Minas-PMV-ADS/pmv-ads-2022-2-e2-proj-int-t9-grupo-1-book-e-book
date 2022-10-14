import { useEffect, useState } from "react";

export default function Books() {
  const [bookArray, setbookArray] = useState();

  useEffect(() => {
    fetch(`http://localhost:4000/books`)
      .then((res) => res.json())
      .then((bookArray) => setbookArray(bookArray));
  }, []);

  return (
    <main className="container p-5 mt-3">
      {bookArray &&
        bookArray.map((book, index) => {
          return (
            <div className="book-row" key={index}>
                <p>Nome: {book.name}</p>
                <p>Autor: {book.author}</p>
                <p>Gênero: {book.genre}</p>
            </div>
          );
        })}
    </main>
  );
}
