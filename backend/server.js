const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost/mern_project', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());

// Define your data schema and model here

const Data = require('./models/data');

// API routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
