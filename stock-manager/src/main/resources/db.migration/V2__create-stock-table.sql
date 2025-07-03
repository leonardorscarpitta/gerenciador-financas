CREATE TABLE app_stock(
-- TABLE ATTRIBUTES --------------------------------
    id TEXT primary key unique not null,
    user_id,
    stockName varchar(5) not null,
    quantityBought smallint not null,
    valueBought decimal(5,2) not null,
-- CONSTRAINTS -------------------------------------
    foreign key (user_id) references app_user(id),
)
