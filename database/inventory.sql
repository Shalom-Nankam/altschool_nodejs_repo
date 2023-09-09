-- create items table
create table items (
id bigint not null auto_increment,
name varchar(255),
size varchar(255),
category_id bigint,
price bigint,
created_at datetime default now(),
updated_at datetime default now(),
primary key(id)
);

-- create categories table
create table categories(
id bigint not null auto_increment,
name varchar(255),
created_at datetime default now(),
updated_at datetime default now(),
primary key (id)
);

-- create users table
create table users(
id bigint not null auto_increment,
first_name varchar(255),
last_name varchar(255),
role enum('admin', 'regular'),
email varchar(255),
password varchar(255),
created_at datetime default now(),
updated_at datetime default now(),
primary key(id)
);


-- insert into items
insert into items ( name, size, category_id, price) values ('Shorts' , 'Medium', 3, 5000);

-- insert into categories
insert into categories (name) values ('Electronics');

-- insert into users
insert into users (first_name, last_name, role, email, password) values ('John', 'Doe', 'regular', 'johndoe@gmail.com', 'jjdoe');

-- select single column from categories
select name from categories;

-- select all from users
select * from users;

-- select specific from items
select name from items where id = 2;



-- update items table
update items set name = 'Shoes' where id = 1;

-- update categories table
update categories set name = 'Gadgets' where id = 1;

-- update users table
update users set first_name = 'Bola', last_name = 'Tinubu' where id = 3;



-- delete from users table
delete from users where id = 2;

-- delete from categories table
delete from categories where name = 'Gadgets';