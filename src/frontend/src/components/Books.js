import { useEffect, useState } from "react";
import "../styles.css";

export default function Books() {
  const [bookArray, setbookArray] = useState();

  useEffect(() => {
    fetch(`http://localhost:4000/books`)
      .then((res) => res.json())
      .then((bookArray) => setbookArray(bookArray));
  }, []);

  return (
    <main className="container p-5 mt-3 flex">
      <div className="div-wrapper">
        <div>
          <span className="title-book-section">Livros por gênero</span>
          <div className="list-genres">
            <li>Artes/música/teatro</li>
            <li>Autoajuda</li>
            <li>Contos/cronicas</li>
            <li>Culinaria</li>
            <li>Filosofia</li>
            <li>Infanto-juvenil</li>
            <li>Ingles/espanhol</li>
            <li>Literatura estrangeira</li>
            <li>Poema</li>
            <li>Política</li>
            <li>Romance</li>
          </div>
        </div>
        <div className="books-column">
          <span className="title-book-section">
            Título Autor Gênero Situação
          </span>
          {bookArray &&
            bookArray.map((book, index) => {
              return (
                <div className="book-row" key={index}>
                  <span style={{ fontWeight: "bold" }}>{book.name} </span>
                  <span>{book.author} </span>
                  <span>{book.genre}</span>
                  <span>{book.rentedBy !== 0 ? 'indisponível' : 'Alugar'}</span>
                </div>
              );
            })}
        </div>
      </div>
    </main>
  );
}
