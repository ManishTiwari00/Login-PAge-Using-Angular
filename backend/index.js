import express from 'express';
import bodyParser from 'body-parser';
import connectDB from '../db/connectDB.js';
import { Student } from '../models/student.model.js';  // Import the Student model



const app = express();


app.use(bodyParser.json());

// Connect to the database
try {
  connectDB();
  console.log('MongoDB connected successfully!');
} catch (error) {
  console.error('Error connecting to MongoDB:', error);
  process.exit(1); // Exit the process if the connection fails
}

app.post('/api/register', async (req, res) => {
  const { name, email, username, password } = req.body;

  try {
    const newStudent = new Student({ name, email, username, password });
    await newStudent.save();
    res.json({ success: true, message: 'Student registered successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'Failed to register student' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
