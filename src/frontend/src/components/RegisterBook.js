import "../styles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterBook() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  const navigate = useNavigate();

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:4000/books/", {
        method: "POST",
        body: JSON.stringify({
          name,
          author,
          genre,
        }),
      });
      if (res.status === 201 || res.status === 201) {
        setAuthor("");
        setGenre("");
        navigate("/books");
      } else {
        alert("Ocorreu um erro no cadastro!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="div-login">
      <div>
        <h3>Cadastrar livro</h3>
        <form className="div-login-inside" onSubmit={handleSubmitRegister}>
          <label for="fname">Nome do livro</label>
          <input
            type="text"
            id="fname"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label for="fname">Autor</label>
          <input
            type="text"
            id="fname"
            name="author"
            onChange={(e) => setAuthor(e.target.value)}
          />

          <br />
          <label for="lname">Gênero</label>
          <input
            type="genre"
            id="lname"
            name="genre"
            onChange={(e) => setGenre(e.target.value)}
          />
          <br />
          <input type="submit" value="Cadastrar" />
        </form>
      </div>
    </div>
  );
}
