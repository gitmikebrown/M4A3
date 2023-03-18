const Student = require('../models/studentModels.js');

exports.getData = async (req, res) => {
    const students = await Student.find()
    res.status(200).json({
        status: 'success',
        results: students.length,
        data: {
            students
        }
    });
}

exports.getDataByID = async (req, res) => {
    const {id} = req.params;
    const students = await Student.find({_id: id})
    res.status(200).json({
        status: 'success',
        results: students.length,
        data: {
            students
        }
    });
}

exports.postData = async (req, res) => {
    const newStudent = req.body;
    const student = await Student.create(newStudent)

    res. status(201). json({
        status: 'success',
        data: student
    });
}

exports.updateDataByID = (req, res) => {res.send('Hello World! from Student Controller PUT');}
exports.patchDataByID = (req, res) => {res.send('Hello World! from Student Controller PATCH');}
exports.deleteDataByID = (req, res) => {res.send('Hello World! from Student Controller DELETE');}