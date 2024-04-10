const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function createUserTable() {
  try {
    const connection = await mysql.createConnection(databaseConfig);

    await connection.query(`USE ${databaseConfig.database}`);

    await connection.query(`CREATE TABLE IF NOT EXISTS user (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            nomeUsuario VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            senha VARCHAR(255) NOT NULL,
            dataRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`);

    await connection.end();

    console.log("Table user created!");
  } catch (error) {
    console.log(`Error creating table User: ${error}`);
  }
}

createUserTable();
