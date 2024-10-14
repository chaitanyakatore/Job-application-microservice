const db = require('../config/db'); 

const postJob = async (req, res) => {
    const { title, description, company, location } = req.body;
    const connection = await db(); 

    try {
        const [rows] = await connection.execute(
            'INSERT INTO jobs (title, description, company, location) VALUES (?, ?, ?, ?)',
            [title, description, company, location]
        );
        res.status(201).json({ id: rows.insertId, title, description, company, location });
    } catch (error) {
        res.status(400).json({ error: error.message });
    } finally {
        await connection.end(); 
    }
};

const getJobs = async (req, res) => {
    const connection = await db(); 

    try {
        const [rows] = await connection.execute('SELECT * FROM jobs');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        await connection.end(); 
    }
};

module.exports = { postJob, getJobs };
