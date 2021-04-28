const express = require('express');
const CustomerController = require('../controller/CustomerController');

const Router = express.Router();

Router.post('/add', CustomerController.AddCustomer);
Router.get('/getAll', CustomerController.GetAllCustomers);
Router.put('/update', CustomerController.UpdateCustomer);
Router.delete('/delete/:id', CustomerController.DeleteCustomer);

module.exports = Router;