const express = require('express');
const router = express.Router();
const User = require('../models/User');
const axios = require('axios');
// Apply for a job
router.post('/apply', async (req, res) => {
    const { jobId, username, userEmail } = req.body;
    const user = new User({ jobId, username, userEmail });
    try {
        await user.save();
        res.status(201).json({ message: 'Application successful', user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all jobs applied by a user
router.get('/:userEmail/applications', async (req, res) => {
    try {
        const applications = await User.find({ userEmail: req.params.userEmail });
        if (applications.length === 0) {
            return res.status(404).json({ message: 'No applications found for this user.' });
        }
        res.json(applications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/jobs', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:9998/api/jobs');
        const jobs = response.data;
        res.status(200).json({
            message:'Jobs fetched successfully',
            jobs,
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch jobs', details: error.message });
    }

    // try {
    //     // Fetch jobs from an external API (e.g., jsonplaceholder or your own service)
    //     // const jobResponse = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    //     const jobResponse = await axios.get('http://localhost:3001/api/jobs');
    //     const jobs = jobResponse.data; // Extract job data from the response
 
    //     res.status(200).json({
    //         message: 'Jobs fetched successfully',
    //         jobs, // Return the fetched jobs
    //     });
    // } catch (err) {
    //     res.status(500).json({ message: err.message });
    // }
});


module.exports = router;
