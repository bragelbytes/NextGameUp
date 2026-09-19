CREATE TABLE user_library (
    id int GENERATED ALWAYS AS IDENTITY primary key,
    user_id int NOT NULL references users(id),
    game_id int NOT NULL references games(id),
    library_state text NOT NULL check(
        library_state IN ('Owned', 'Wishlist')
    ),
    created_at timestamptz NOT NULL default current_timestamp,
    updated_at timestamptz NOT NULL default current_timestamp,
    deleted_at timestamptz,
    UNIQUE(user_id, game_id)
);