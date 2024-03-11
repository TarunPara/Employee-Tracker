-- Inserting data into the 'department' table
INSERT INTO department (name)
VALUES 
('Manufacturing'), 
('Admin'), 
('Compliance'), 
('Tech Support'), 
('Executive'), 
('Client Relations');

-- Inserting data into the 'role' table
INSERT INTO role (title, salary, department_id)
VALUES 
('Mechanical Engineer', 105000, 1), 
('Financial Analyst', 95000, 2), 
('Compliance Officer', 95000, 3), 
('Network Administrator', 72000, 4), 
('Operations Manager', 125000, 5), 
('Sales Representative', 65000, 6);

-- Inserting data into the 'employee' table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Leo', 'Fender', 1, 5),
('Paul', 'Reed', 2, 5),
('Les', 'Paul', 3, 5),
('Orville', 'Gibson', 4, 5),
('George', 'Fullerton', 5, NULL),
('Adolph', 'Rickenbacker', 6, 10),
('Frederick', 'Gretsch', 1, 10),
('Lloyd', 'Loar', 2, 10),
('Ted', 'McCarty', 5, NULL);
