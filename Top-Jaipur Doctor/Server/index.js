const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MySQL Connection Pool
const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '6375',
  database: process.env.DB_NAME || 'topjaipurdoctor',
  waitForConnections: true,
  connectionLimit: 10, // Maximum connections allowed
  queueLimit: 0,
});



// Sample API
app.get('/', (req, res) => {
  res.send('Backend is running...');
});

// API for saving appointments
app.post('/api/appointments', (req, res) => {
  const { patientName, patientNumber, patientGender, appointmentTime, doctorName } = req.body;

  const sql = `INSERT INTO appointments (patient_name, patient_number, patient_gender, appointment_time, doctor_name) VALUES (?, ?, ?, ?, ?)`;

  db.query(sql, [patientName, patientNumber, patientGender, appointmentTime, doctorName], (err, result) => {
   
    if (err) {
      console.error('Error inserting appointment:', err);
      return res.status(500).json({ error: 'Database error', details: err.message });
    }

    res.status(201).json({
      message: 'Appointment saved successfully!',
      appointmentId: result.insertId, // Returning the ID of the created appointment
    });
  });
});






// POST API to save reviews
app.post("/api/reviews", (req, res) => {
  const { name, location, message } = req.body;

  const sql = `INSERT INTO reviews (name, location, message) VALUES (?, ?, ?)`;

  db.query(sql, [name, location, message], (err, result) => {
    if (err) {
      console.error("Error inserting review:", err);
      return res.status(500).json({ error: "Database error" });
    }

    res.status(201).json({ message: "Review saved successfully!" });
  });
});




app.get("/appointments", (req, res) => {
  const query = "SELECT * FROM appointments";
  db.query(query, (err, results) => {
   
    if (err) {
      console.error("Error fetching appointments:", err);
      return res.status(500).json({ error: "Database error" });
    }

    console.log("Fetched appointments:", results); // 🔍 Log here
    res.json(results);
  });
});

// Server Start
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
