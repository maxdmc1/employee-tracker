DROP DATABASE IF EXISTS player_trackerDB;
CREATE database player_trackerDB;

USE player_trackerDB;

CREATE TABLE groups (
  group_id INT NOT NULL AUTO_INCREMENT,
  group_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (group_id)
);

CREATE TABLE positions (
  role_id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10) NOT NULL,
  group_id INT,
  PRIMARY KEY (role_id),
  CONSTRAINT fk_group FOREIGN KEY (group_id)
  REFERENCES groups(group_id)
);

CREATE TABLE players (
  employee_id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT (10) NOT NULL,
  manager_id INT (10),
  PRIMARY KEY (employee_id),
  CONSTRAINT fk_role FOREIGN KEY (role_id)
  REFERENCES positions(role_id)
);

SELECT * FROM groups;
select * from positions;
select * from players;



--* **department**:

--   * **id** - INT PRIMARY KEY
--   * **name** - VARCHAR(30) to hold department name

-- * **role**:

--   * **id** - INT PRIMARY KEY
--   * **title** -  VARCHAR(30) to hold role title
--   * **salary** -  DECIMAL to hold role salary
--   * **department_id** -  INT to hold reference to department role belongs to

-- * **employee**:

--   * **id** - INT PRIMARY KEY
--   * **first_name** - VARCHAR(30) to hold employee first name
--   * **last_name** - VARCHAR(30) to hold employee last name
--   * **role_id** - INT to hold reference to role employee has
--   * **manager_id** - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager