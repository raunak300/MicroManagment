CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

INSERT INTO users (name, email, password)
VALUES (
    'John Doe',
    'john.123@zeno.com',
    'Raunak_@123@123'
);

INSERT INTO users (name, email, password)
VALUES
    ('Meena', 'meena.789@zeno.com', 'Raunak_@123@123'),
    ('Jane Smith', 'jane.456@zeno.com', 'Raunak_@123@123');