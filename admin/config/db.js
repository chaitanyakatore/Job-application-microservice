const mysql = require('mysql2/promise');

const connectDB = async () => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'pass@word1', 
        database: 'jobPortal' 
    });

    console.log('MySQL connected successfully');
    return connection;
};

module.exports = connectDB;
