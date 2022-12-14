import database from "../config/database.js";
import { NotFoundError, BadRequestError } from "../utils/errors.js";
import bcrypt from "bcryptjs";

class User {
  static getUsers = async (_, response, next) => {
    try {
      const { rowCount, rows } = await database().query("SELECT * FROM users");
      if (rowCount === 0) throw new NotFoundError();
      return response.status(200).json(rows);
    } catch (error) {
      next(error);
    }
  };

  static registerUser = async (request, response, next) => {
    try {
      const { name, email, password } = request.body;
      console.log(request.body)
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      await database().query(
        "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
        [name, email, hashedPassword]
      );
      return response.sendStatus(201);
    } catch (error) {
      console.log(error)
      next(error);
    }
  };

  static loginUser = async (request, response, next) => {
    try {
      const { email, password } = request.body;
      let { rows, rowCount } = await database().query(
        "SELECT password FROM users WHERE email=$1",
        [email]
      );
      if (rowCount === 0) throw new NotFoundError();
  
      const userPassword = rows[0].password;
      if (!(await bcrypt.compare(password, userPassword))) {
          throw new BadRequestError('Senha incorreta')
      };
  
      ({ rows, rowCount } = await database().query(
        "SELECT name FROM users WHERE email=$1",
        [email]
      ));
      
      return response.status(200).json(rows);
    } catch (error) {
      next(error);
    }
  };

}

export { User };
