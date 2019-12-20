const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table")

const connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 8889,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "player_trackerDB"
});

connection.connect(function (err) {
    if (err) throw err;
    runTracker();
});

function runTracker() {
    // console.clear();
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "Would you like to :",
            choices: [
                "View All Groups?",
                "View All Players sorted by Position Group?",
                "View All Players sorted by Position?",
                "View All Players?",
                "Add a Group?",
                "Add a Player?",
                "Update a Player's Position?",
                "Quit.",
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "Add a Group?":
                    addGroup(); // Create a new Group (Coaches or Bench Riders)
                    break;

                case "Add a Player?":
                    addPlayer(); // What Department? / What role? (What title/ what salary) / What Employee (What first_name/ what last_name)
                    break;

                case "View All Groups?":
                    viewGroups(); //list each department - done
                    break;

                case "View All Players sorted by Position Group?": // pull first_name last_name title and salary - done
                    viewPlayersInGroup();
                    break;

                case "View All Players sorted by Position?": // pull first last department_name
                    viewPlayersInPosition();
                    break;

                case "View All Players?": // pull all employees first_name last_name title salary department_name - done
                    viewPlayers();
                    break;

                case "Update a Player's Position?": // Change a position for a player
                    updatePlayerPosition();
                    break;

                case "Quit.": // End program
                    quit();
                    break;
            };
        });
    // console.clear();
};

function viewGroups() {
    // console.clear();
    let query = "SELECT group_name FROM groups";
    connection.query(query, function (err, res) {
        let table = []
        for (let i = 0; i < res.length; i++) {
            table.push([res[i].group_name]);
        };
        console.table("");
        console.table(["Position Groups"], table);
        console.log("");
        console.log("Press up or down arrow to continue");
        runTracker();
    });
};

function viewPlayers() {
    // console.clear();
    let query = "SELECT players.first_name, players.last_name, positions.title, positions.salary FROM players INNER JOIN positions ON players.role_id = positions.role_id;";
    connection.query(query, function (err, res) {
        let table = []
        for (let i = 0; i < res.length; i++) {
            table.push([res[i].first_name, res[i].last_name, res[i].title, res[i].salary]);
        }
        console.table("");
        console.table(["First Name", "Last Name", "Position", "Salary"], table);
        console.log("");
        console.log("Press up or down arrow to continue");
        runTracker();
    })
};

function viewPlayersInGroup() {
    // console.clear();
    let query2 = "SELECT players.first_name, players.last_name, positions.title, positions.salary, groups.group_name FROM players LEFT JOIN positions ON players.role_id = positions.role_id LEFT JOIN groups ON positions.group_id = groups.group_id";
    let table2 = []
    connection.query(query2, function (err, res) {
        for (let i = 0; i < res.length; i++) {
            table2.push([res[i].first_name, res[i].last_name, res[i].title, res[i].salary, res[i].group_name]);
        }
        console.log("");
        console.table(["First Name", "Last Name", "Position", "Salary", "Position Group"], table2);
        console.log("");
        console.log("Press up or down arrow to continue");
        runTracker();
    });
};

function quit() {
    connection.end()
    process.exit()
};

function addGroup() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "newGroup",
                message: "What Position Group would you like to add?"
            }
        ]).then(function (res) {
            connection.query(
                "INSERT INTO groups SET ?",
                {
                    group_name: res.newGroup,
                },
                function (err) {
                    if (err) throw err;
                });
            runTracker();
        });
};

function addPlayer() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "newPlayerFirst",
                message: "What is the First Name of the Player you would like to add?"
            },
            {
                type: "input",
                name: "newPlayerLast",
                message: "What is the Last Name of the Player you would like to add?"
            },
            {
                type: "list",
                name: "newPlayerPosition",
                message: "What is the Position of the Player you would like to add?",
                choices: [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                ]
            },
        ]).then(function (res) {
            connection.query(
                "INSERT INTO players SET ?",
                {
                    first_name: res.newPlayerFirst,
                    last_name: res.newPlayerLast,
                    role_id: res.newPlayerPosition,
                    manager_id: 1
                },
                function (err) {
                    if (err) throw err;
                });
            viewPlayers();
        });
    // runTracker();
};

function viewPlayersInPosition() {
    // console.clear();
    let query = "SELECT players.first_name, players.last_name, positions.title FROM players, positions WHERE players.role_id = positions.role_id";
    connection.query(query, function (err, res) {
        let table3 = []
        for (let i = 0; i < res.length; i++) {
            table3.push([res[i].first_name, res[i].last_name, res[i].title]);

        }
        console.table("");
        console.table(["First Name", "Last Name", "Position"], table3);
        console.log("");
        console.log("Press up or down arrow to continue");
        runTracker();
    })
};

function updatePlayerPosition() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "newPlayerId",
                message: "What is the Number of the Player you would like to change?"
            },
            {
                type: "list",
                name: "changePlayerPosition",
                message: "What is the NEW Position of this Player?",
                choices: [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                ]
            },
        ]).then(function (res) {
            let changePlayerPosition = res.changePlayerPosition
            let newPlayerId = res.newPlayerId
            connection.query(`UPDATE players SET role_id = "${changePlayerPosition}" WHERE employee_id = "${ newPlayerId }";`, function (err, res) {
                    if (err) throw err;
                });
            viewPlayers();
        });
    // runTracker();
};
