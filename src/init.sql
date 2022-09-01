CREATE TABLE IF NOT EXISTS "users" (
"id"         SERIAL,
"name"       VARCHAR(260)      NOT NULL,
"email"      VARCHAR(260)      NOT NULL    UNIQUE,
"password"   VARCHAR(260)      NOT NULL,
PRIMARY KEY  ("id")   
);

CREATE TABLE IF NOT EXISTS "books" (
"id"          SERIAL,
"name"        VARCHAR(260)      NOT NULL,
"author"      VARCHAR(260)      NOT NULL,
"genre"       VARCHAR(260)      NOT NULL,
PRIMARY KEY   ("id")
);

CREATE TABLE IF NOT EXISTS "users_books" (
"user_id"    INT      NOT NULL,
"book_id"    INT      NOT NULL,
FOREIGN KEY ("user_id")   REFERENCES   "users"(id)   ON DELETE CASCADE,
FOREIGN KEY ("book_id")    REFERENCES  "books"(id)    ON DELETE CASCADE,
PRIMARY KEY ("user_id", "book_id")
);