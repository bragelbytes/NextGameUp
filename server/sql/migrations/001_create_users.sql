CREATE TABLE users (
  id int GENERATED ALWAYS AS IDENTITY primary key,
  username varchar(30) NOT NULL UNIQUE,
  created_at timestamptz NOT NULL default current_timestamp
);
