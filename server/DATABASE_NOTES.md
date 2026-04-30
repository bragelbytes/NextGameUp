# Database Notes

## users
users
    id
    username
    created_at

## games
games
    id
    created_at
    title
    source_url

## user_library
user_library
    id
    user_id
    games_id
    user_backlog__id
    created_at
    updated_at
    deleted_at

## user_backlog
user_backlog
    id
    user_id
    games_id
    user_library_id
    created_at
    updated_at