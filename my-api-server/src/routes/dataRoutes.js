const express = require('express');
const router = express.Router();
const DataController = require('../controllers/dataController');

const dataController = new DataController();

// Define API endpoints
router.get('/data', dataController.getAllData);
router.get('/data/:id', dataController.getDataById);
router.post('/data', dataController.createData);
router.put('/data/:id', dataController.updateData);
router.delete('/data/:id', dataController.deleteData);

module.exports = router;