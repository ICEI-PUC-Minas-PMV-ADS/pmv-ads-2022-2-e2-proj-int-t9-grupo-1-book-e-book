import database from "../config/database.js";
import { NotFoundError } from "../utils/errors.js";

class Books {
  static getBooks = async (_, response, next) => {
    try {
      const { rowCount, rows } = await database().query("SELECT * FROM books");
      if (rowCount === 0) throw new NotFoundError();
      return response.status(200).json(rows);
    } catch (error) {
      next(error);
    }
  };

  static postBookToRent = async (request, response, next) => {
    try {
      const { name, author, genre } = request.body;

      await database().query(
        "INSERT INTO books (name, author, genre) VALUES ($1, $2, $3)",
        [name, author, genre]
      );
      return response.sendStatus(201);
    } catch (error) {
      next(error);
    }
  };

  static rentBook = async (request, response, next) => {
    try {
      const { userId, bookId } = request.body;

      await database().query("UPDATE books SET rented_by=$1 WHERE id=$2", [
        userId,
        bookId,
      ]);
      return response.sendStatus(201);
    } catch (error) {
      next(error);
    }
  };

  static viewBooksByGenre = async (request, response, next) => {
    try {
      const { genre } = request.query;
      // books/genre/?genre=teste

      const { rowCount, rows } = await database().query(
        "SELECT * FROM books WHERE genre=$1",
        [genre]
      );
      if (rowCount === 0) throw new NotFoundError();
      return response.status(200).json(rows);
    } catch (error) {
      next(error);
    }
  };
}

export { Books };
