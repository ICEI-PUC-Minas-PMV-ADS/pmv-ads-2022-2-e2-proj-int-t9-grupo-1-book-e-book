export default function RegisterBook() {
  return (
    <>
      <h2>Cadastrar livro</h2>
      <form action="/">
        <label for="fname">Nome do livro</label>
        <input type="text" id="fname" name="name" /><br/>
        <label for="lname">Autor</label>
        <input type="text" id="lname" name="author" /><br/>
        <label for="lname">Gênero</label>
        <input type="text" id="lname" name="genre" /><br/>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
