export default async (database, retries = 5) => {
  while (retries > 0) {
    try {
      await database().connect();
      console.log("Database connected");
      return;
    } catch (error) {
      console.log(
        "host",
        process.env.DB_HOST,
        "user",
        process.env.DB_USER,
        "db",
        process.env.DB_DATABASE,
        "pass",
        process.env.DB_PASSWORD,
        "port",
        process.env.DB_PORT
      );
      retries -= 1;
      console.log(`Error in database connection. Retries left: ${retries}`);
      console.log(error);
      await new Promise((res) => setTimeout(res, 15000));
    }
  }
};
