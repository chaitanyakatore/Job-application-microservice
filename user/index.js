const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const cors = require('cors');
// const dotenv = require('dotenv');

// Import routes
const routes = require('./routes/userRoutes'); // Adjust the path as necessary

// dotenv.config();

const app = express();
// app.use(cors());
app.use(bodyParser.json());

// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.error(err));

    mongoose.connect('mongodb://127.0.0.1:27017/User_Details',{
        // userNewUrlParser: true,
        // userUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));
// Use the routes
app.use('/api', routes);

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
