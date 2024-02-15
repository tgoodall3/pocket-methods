const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

// Parse JSON bodies (as sent by API clients)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pocket_methods'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to the database.');
});

// Define your endpoints here
app.get('/api/instruments', (req, res) => {
  db.query('SELECT * FROM instruments', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.get('/api/difficulties', (req, res) => {
  db.query('SELECT * FROM difficulties', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.get('/api/mode', (req, res) => {
  db.query('SELECT * FROM modes', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.get('/api/levels', (req, res) => {
  const { instrumentID, modeID, difficultyID } = req.query;
  db.query(
    'SELECT * FROM levels',
    [instrumentID, modeID, difficultyID],
    (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
}); 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
