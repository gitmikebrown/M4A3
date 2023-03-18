
const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentController');


router.route('/')
    .get(studentController.getData)
    .post(studentController.postData)

router.route('/:id')
    .get(studentController.getDataByID)
    .patch(studentController.updateDataByID)
    .put(studentController.updateDataByID)
    .delete(studentController.deleteDataByID);
module.exports = router; 