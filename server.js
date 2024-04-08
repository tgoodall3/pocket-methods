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
  database: 'pocket_method'
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

app.get('/api/skill_modes', (req, res) => {
  const query = 'SELECT * FROM skill_modes';
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: err });
    } else {
      res.json(results);
    }
  });
});


// app.get('/api/levels', (req, res) => {
//   const { instrumentID, modeID, difficultyID } = req.query;
//   db.query(
//     'SELECT * FROM levels WHERE InstrumentID = ? AND ModeID = ? AND DifficultyID = ?',
//     [instrumentID, modeID, difficultyID],
//     (err, results) => {
//       if (err) {
//         return res.status(500).json({ error: err.message });
//       }
//       res.json(results);
//     }
//   );
// });
  

app.get('/api/levels', (req, res) => {
  const { instrument, mode, difficulty, skillMode } = req.query;
  let query = `
    SELECT levels.* 
    FROM levels 
    INNER JOIN instruments ON levels.InstrumentID = instruments.id
    INNER JOIN modes ON levels.ModeID = modes.id
    INNER JOIN difficulties ON levels.DifficultyID = difficulties.id
  `;
  let values = [instrument, mode, difficulty];

  if (skillMode) {
    query += `
      INNER JOIN skill_modes ON levels.skill_mode_id = skill_modes.id
      WHERE instruments.name = ? AND modes.name = ? AND difficulties.name = ? AND skill_modes.name = ?
    `;
    values.push(skillMode);
  } else {
    query += `
      WHERE instruments.name = ? AND modes.name = ? AND difficulties.name = ?
    `;
  }

  console.log(query, values);

  db.query(query, values, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});



const PORT = process.env.PORT || 3306;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



