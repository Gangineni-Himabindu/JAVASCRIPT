const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Bindu@410',
  database: 'bindu'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadId);

  // Create a table
  connection.query(`CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL
  )`, (err, results, fields) => {
    if (err) {
      console.error('Error creating table:', err.stack);
      return;
    }
    console.log('Table created or already exists:', results);

    // Insert data into the table
    connection.query(`INSERT INTO users (name, age) VALUES
      ('Alice', 30),
      ('Bob', 25),
      ('Charlie', 35)`, (err, results, fields) => {
      if (err) {
        console.error('Error inserting data:', err.stack);
        return;
      }
      console.log('Data inserted:', results.affectedRows, 'rows');

      // Update data in the table
      connection.query(`UPDATE users SET age = 31 WHERE name = 'Alice'`, (err, results, fields) => {
        if (err) {
          console.error('Error updating data:', err.stack);
          return;
        }
        console.log('Data updated:', results.affectedRows, 'rows');

        // Delete data from the table
        connection.query(`DELETE FROM users WHERE name = 'Bob'`, (err, results, fields) => {
          if (err) {
            console.error('Error deleting data:', err.stack);
            return;
          }
          console.log('Data deleted:', results.affectedRows, 'rows');

          // Select data from the table
          connection.query('SELECT * FROM users', (err, results, fields) => {
            if (err) {
              console.error('Error selecting data:', err.stack);
              return;
            }
            console.log('Data selected:', results);

            // Close the connection
            connection.end();
          });
        });
      });
    });
  });
});
