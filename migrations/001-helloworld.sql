-- Up
CREATE TABLE Person(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT
);

CREATE TABLE Vehicle(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    model TEXT,
    ownerId INTEGER REFERENCES Person(id)
);

INSERT INTO Person(name, email) values ('Bruno', 'bruno@antunes.pt');
INSERT INTO Person(name, email) values ('Gerardo', 'zherar7ordoya@pm.me');

INSERT INTO Vehicle (brand, model, ownerId) values ('Audi', 'R8', 1);
INSERT INTO Vehicle (brand, model, ownerId) values ('Ford', 'R6', 1);
INSERT INTO Vehicle (brand, model, ownerId) values ('Mercedes', 'Benz', 2);


-- Down
DROP TABLE Person;
DROP TABLE Vehicle;
