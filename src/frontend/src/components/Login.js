import "../styles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      console.log(name, email, password);
      let res = await fetch("http://localhost:4000/users/login", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (res.status === 201 || res.status === 201) {
        setName("");
        setEmail("");
        setPassword("");
        navigate("/books");
      } else {
        alert('Email ou senha incorretos')
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    try {
      console.log(name, email, password);
      let res = await fetch("http://localhost:4000/users/register", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
      if (res.status === 201 || res.status === 201) {
        setEmail("");
        setPassword("");
        navigate("/books");
      } else {
        alert('Ocorreu um erro no cadastro!')
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="div-login">
      <div>
        <h3>Faça seu cadastro</h3>
        <form className="div-login-inside" onSubmit={handleSubmitRegister}>
          <label for="fname">Nome completo</label>
          <input
            type="text"
            id="fname"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label for="fname">Email</label>
          <input
            type="text"
            id="fname"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <br />
          <label for="lname">Senha</label>
          <input
            type="password"
            id="lname"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div>
        <h3>Seja bem-vindo!</h3>
        <form className="div-login-inside" onSubmit={handleSubmitLogin}>
          <label for="fname">Email</label>
          <input
            type="text"
            id="fname"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label for="lname">Senha</label>
          <input
            type="password"
            id="lname"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
