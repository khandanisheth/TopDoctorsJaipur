-- Create Data Bace

create database topjaipurdoctor;


-- Create Table Appointments

CREATE TABLE appointments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  patient_name VARCHAR(100),
  patient_number VARCHAR(15),
  patient_gender VARCHAR(10),
  appointment_time DATETIME,
  doctor_name VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Data check 
select * from appointments;

-- Create Table Reviews
CREATE TABLE reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,   -- Unique ID for each review
  name VARCHAR(255) NOT NULL,          -- Reviewer's name
  location VARCHAR(255) NOT NULL,      -- Reviewer's location
  message TEXT NOT NULL,               -- Review message
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Timestamp when the review was submitted
);
select * from reviews;


