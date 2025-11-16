const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database/university.db');
console.log('Connected to SQLite database');

db.run(`
  CREATE TABLE courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    courseCode TEXT,
    title TEXT,
    credits INTEGER,
    description TEXT,
    semester TEXT
  )
`, (err) => {
  if (err) {
    console.error('Error creating table:', err.message);
  } else {
    console.log('Courses table created or already exists');
  }

  db.close((err) => {
    if (err) console.error('Error closing database:', err.message);
    else console.log('Database connection closed');
  });
});

