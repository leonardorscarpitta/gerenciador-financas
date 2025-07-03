CREATE TABLE app_stock(
-- TABLE ATTRIBUTES --------------------------------
    id TEXT primary key unique not null,
    user_owner,
    stockName varchar(5) not null,
    quantityBought smallint not null,
    valueBought decimal not null,
-- CONSTRAINTS -------------------------------------
    foreign key (user_owner) references app_user(id),
)
