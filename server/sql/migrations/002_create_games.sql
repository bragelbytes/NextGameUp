CREATE TABLE games (
    id int GENERATED ALWAYS AS IDENTITY primary key,
    rawg_id int NOT NULL UNIQUE,
    name text NOT NULL,
    created_at timestamptz NOT NULL default current_timestamp,
    source_url text
);