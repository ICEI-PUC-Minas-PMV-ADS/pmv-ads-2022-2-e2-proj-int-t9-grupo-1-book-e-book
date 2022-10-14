export default function Login() {
  return (
    <>
      <h2>Cadastro</h2>
      <form action="/">
        <label for="fname">Nome completo</label>
        <input type="text" id="fname" name="email" />
        <br />
        <label for="fname">Email</label>
        <input type="text" id="fname" name="email" />
        <br />
        <label for="lname">Senha</label>
        <input type="text" id="lname" name="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <h2>Login</h2>
      <form action="/">
        <label for="fname">Email</label>
        <input type="text" id="fname" name="email" />
        <br />
        <label for="lname">Senha</label>
        <input type="text" id="lname" name="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
