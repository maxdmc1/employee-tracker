USE player_trackerDB;

-- insert into departments --
INSERT INTO groups (group_name)
VALUES ("Infield");

INSERT INTO groups (group_name)
VALUES ("Outfield");

INSERT INTO groups (group_name)
VALUES ("Pitchers");

INSERT INTO groups (group_name)
VALUES ("Manager");

-- insert into positions --
INSERT INTO positions (title, salary, group_id)         
VALUES ("Catcher", 90000, 1);

INSERT INTO positions (title, salary, group_id)
VALUES ("First Base", 75000, 1);

INSERT INTO positions (title, salary, group_id)
VALUES ("Second Base", 80000, 1);

INSERT INTO positions (title, salary, group_id)
VALUES ("Third Base", 90000, 1);

INSERT INTO positions (title, salary, group_id)
VALUES ("Short Stop", 100000, 1);

INSERT INTO positions (title, salary, group_id)
VALUES ("Left Field", 85000, 2);

INSERT INTO positions (title, salary, group_id)
VALUES ("Center Field", 100000, 2);

INSERT INTO positions (title, salary, group_id)
VALUES ("Right Field", 80000, 2);

INSERT INTO positions (title, salary, group_id)
VALUES ("Starting Pitcher", 120000, 3);

INSERT INTO positions (title, salary, group_id)
VALUES ("Relief Pitcher", 100000, 3);

INSERT INTO positions (title, salary, group_id)
VALUES ("Manager", 150000, 4);

-- insert players --
INSERT INTO players (first_name, last_name, role_id, manager_id)
VALUES ("Rocco", "Baldelli", 11, NULL);

INSERT INTO players (first_name, last_name, role_id, manager_id)
VALUES ("Mitch", "Garver", 1, 1);

INSERT INTO players (first_name, last_name, role_id, manager_id)
VALUES ("CJ", "Cron", 2, 1);

INSERT INTO players (first_name, last_name, role_id, manager_id)
VALUES ("Jonathan", "Schoop", 3, 1);

INSERT INTO players (first_name, last_name, role_id, manager_id)
VALUES ("Miguel", "Sano", 4, 1);

INSERT INTO players (first_name, last_name, role_id, manager_id)
VALUES ("Jorge", "Polanco", 5, 1);

INSERT INTO players (first_name, last_name, role_id, manager_id)
VALUES ("Marwin", "Gonzalez", 6, 1);

INSERT INTO players (first_name, last_name, role_id, manager_id)
VALUES ("Max", "Kepler", 7, 1);

INSERT INTO players (first_name, last_name, role_id, manager_id)
VALUES ("Eddie", "Rosario", 8, 1);

INSERT INTO players (first_name, last_name, role_id, manager_id)
VALUES ("Jose", "Berrios", 9, 1);

INSERT INTO players (first_name, last_name, role_id, manager_id)
VALUES ("Taylor", "Rogers", 10, 1);

INSERT INTO players (first_name, last_name, role_id, manager_id)
VALUES ("Jason", "Castro", 1, 1);

INSERT INTO players (first_name, last_name, role_id, manager_id)
VALUES ("Tyler", "Austin", 2, 1);

INSERT INTO players (first_name, last_name, role_id, manager_id)
VALUES ("Luis", "Arraez", 3, 1);

INSERT INTO players (first_name, last_name, role_id, manager_id)
VALUES ("Nelson", "Cruz", 4, 1);

INSERT INTO players (first_name, last_name, role_id, manager_id)
VALUES ("Ehire", "Adrianza", 5, 1);

INSERT INTO players (first_name, last_name, role_id, manager_id)
VALUES ("Luke", "Raley", 6, 1);

INSERT INTO players (first_name, last_name, role_id, manager_id)
VALUES ("Byron", "Buxton", 7, 1);

INSERT INTO players (first_name, last_name, role_id, manager_id)
VALUES ("Jake", "Cave", 8, 1);

INSERT INTO players (first_name, last_name, role_id, manager_id)
VALUES ("Martin", "Perez", 9, 1);

INSERT INTO players (first_name, last_name, role_id, manager_id)
VALUES ("Trevor", "May", 10, 1);



