// models/department.js
const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    departmentName: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Department', departmentSchema);
