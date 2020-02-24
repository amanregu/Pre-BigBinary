const express = require('express');

const router = express.Router();

const Repository = require('../models/repository.js');

router.get('/get', async (req, res) => {
  try {
    const repositories = await Repository.find({});
    return res.status(200).json({ success: true, repositories });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
});

module.exports = router;
