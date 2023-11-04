// routes/departments.js
const express = require('express');
const router = express.Router();
const Department = require('../models/department');

// Create a new department
router.post('/addDepartment', async (req, res) => {
    try {
        const department = await Department.create(req.body);
        res.json(department);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all departments
router.get('/getDepartment', async (req, res) => {
    try {
        const departments = await Department.find();
        res.json(departments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a specific department by ID
router.get('/getDepartment/:id', async (req, res) => {
    try {
        const department = await Department.findById(req.params.id);
        if (!department) {
            return res.status(404).json({ message: 'Department not found' });
        }
        res.json(department);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a department by ID
router.put('/updateDepartment/:id', async (req, res) => {
    try {
        const updatedDepartment = await Department.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedDepartment) {
            return res.status(404).json({ message: 'Department not found' });
        }
        res.json(updatedDepartment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a department by ID
router.delete('/deleteDepartment/:id', async (req, res) => {
    try {
        const deletedDepartment = await Department.findByIdAndDelete(req.params.id);
        if (!deletedDepartment) {
            return res.status(404).json({ message: 'Department not found' });
        }
        res.json(deletedDepartment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
