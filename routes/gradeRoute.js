
const express = require('express');
const router = express.Router();
const gradeController = require('../controller/gradeController');


router.route('/')
    .get(gradeController.getData )
    .post(gradeController.postData)

router.route('/')
    .get(gradeController.getData )
    .patch(gradeController.postData)
    .put(gradeController.putData)
    .delete(gradeController.deleteData);
module.exports = router; 