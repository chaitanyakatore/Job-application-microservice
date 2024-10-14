const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const jobRoutes = require('./routes/jobRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the database
connectDB();

app.use(bodyParser.json());
app.use('/api/jobs', jobRoutes);

app.listen(PORT, () => {
    console.log(`Admin service is running on port ${PORT}`);
});
