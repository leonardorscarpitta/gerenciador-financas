CREATE TABLE app_user(
-- TABLE ATTRIBUTES --------------------------------
    id TEXT primary key unique not null,
    email varchar(64) unique not null,
    password varchar(255) not null,
    role varchar(12) not null,
-- CONSTRAINTS -------------------------------------
)