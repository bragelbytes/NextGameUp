CREATE TABLE user_backlog (
    id int GENERATED ALWAYS AS IDENTITY primary key,
    library_id int NOT NULL references user_library(id),
    backlog_status text NOT NULL check(backlog_status IN ('Backlog', 'Playing', 'Paused', 'Finished', 'Dropped')),
    created_at timestamptz NOT NULL default current_timestamp,
    updated_at timestamptz NOT NULL default current_timestamp,
    started_at timestamptz,
    finished_at timestamptz,
    UNIQUE(library_id)
);