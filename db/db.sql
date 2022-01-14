CREATE TABLE product
(
    id INTEGER PRIMARY KEY auto_increment,
    title varchar(100),
    description varchar(300),
    price float,
    categoryid varchar(1000)
);

CREATE TABLE category
(
    id INTEGER PRIMARY KEY auto_increment,
    title varchar(100),
    description varchar(300)
   
);

INSERT INTO category (title , description) values ('ELECTRONICS' , 'ELECTRONIC PRODUCTS');
INSERT INTO category (title , description) values('COMPUTERS' , 'lIST OF COMPUTERS');
INSERT INTO category (title , description) values('tv' , 'TELEVISION');
INSERT INTO category (title , description) values('GIFT' , 'LIST OF GIFTS');
INSERT INTO category (title , description) values('FASHION' , 'MEN AND WOMEN FASHION');

