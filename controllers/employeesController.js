//set up data opbject
const Employee = require('../model/Employee')

const getAllEmployees = async (req, res) => {
    const employees = await deleteEmplolyee.find();
    if (!employees) return res.status(204).json({'message':'No employees found.'});
    res.json(employees);
}

const createNewEmoloyee = async (req, res) => {
    //make sure first and last name are sent
    if (!req?.body?.firstname || !req?.body?.lastname) return res.status(400).json({'message':'First and last names are required.'});
    
    try {
        const result = await Employee.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,

        });

        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }
    
}

const updateEmployee = async (req, res) => {
    
    if (!req?.body?.id) {
        return res.status(400).json({'message': 'An id parameter is required.'})
    }

    const employee = await Employee.findOne({_id: req.body.id}).exec();
    if (!employee) {
        return res.status(204).json({ 'message': `No emplpyee matches ID: ${req.body.id}.`});
    }

    if (req.body?.firstname) employee.firstname = req.body.firstname;
    if (req.body?.lastname) employee.lastname = req.body.lasttname;
    const result = await employeee.save();
    res.json(result);
}

const deleteEmplolyee = async (req, res) => {
    if (!req?.body?.id) {
        return res.status(400).json({'message': 'An employee id is required.'})
    }
    
    const employee = await Employee.findOne({_id: req.body.id}).exec();
    if (!employee) {
        return res.status(204).json({ 'message': `No emplpyee matches ID: ${req.body.id}.`});
    }

    const result = await employee.deleteOne({_id: req.body.id});
    res.json(result);
}

const getEmployee = async (req, res) => {
    if (!req?.params?.id) {
        return res.status(400).json({'message': 'An employee id is required.'})
    }
    const employee = await Employee.findOne({_id: req.params.id}).exec();
    if (!employee) {
        return res.status(204).json({ 'message': `No emplpyee matches ID: ${req.body.id}.`});
    }

    res.json(employee);
}

module.exports = {
    getAllEmployees,
    createNewEmoloyee,
    updateEmployee,
    deleteEmplolyee,
    getEmployee
}