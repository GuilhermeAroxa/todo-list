const express = require('express');

const checklistDependencyRouter = express.Router();
const Checklist = require('../models/checklist');
const Task = require('../models/task');

module.exports = checklistDependencyRouter;