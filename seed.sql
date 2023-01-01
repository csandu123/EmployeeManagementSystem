USE employeeTracker_db;

INSERT INTO departments(department_name) VALUES 
("Management"),
("Sales"),
("IT"),
("Human Resources"),
("Legal Team"),
("Accounting");

INSERT INTO roles(title, salary, department_id) VALUES
("Lead", 180000, 1),
("Sales Rep", 100000, 2),
("Software Engineer", 125000, 3),
("HR", 80000, 4),
("Lawyer", 200000, 6),
("Accountant", 75000, 5);

INSERT INTO employees(first_name, last_name, role_id) VALUES
("Cosmin", "Sandu", 1),
("James", "May", 2),
("Jeremy", "Clarkson", 3),
("Richard", "Hammond", 4),
("Justin", "Timberlake", 5),
("Cory", "Sandhagen", 6);