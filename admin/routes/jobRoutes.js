const express = require('express');
const { postJob, getJobs } = require('../controller/jobController');
const router = express.Router();

router.post('/', postJob);
router.get('/', getJobs);

module.exports = router;
