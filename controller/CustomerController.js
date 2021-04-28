const connection = require('../db/DBConnection');

const AddCustomer = (req, res) => {
  saveCustomer((id) => {
    connection.query(
      'INSERT INTO Customer VALUES(?,?,?,?)',
      [id, req.body.name, req.body.address, req.body.salary],
      (error, results, fields) => {
        if (error) {
          res.status(500).json({ message: 'Error' });
        } else {
          res.status(200).json({ message: 'Success' });
        }
      }
    );
  });
};

const GetAllCustomers = (req, res) => {
  connection.query('SELECT * FROM Customer', (error, results, fields) => {
    if (error) {
      res.status(500).json({ message: 'Error' });
    } else {
      res.status(200).json({ message: 'Success', data: results });
    }
  });
};

const UpdateCustomer = (req, res) => {
  connection.query(
    'UPDATE Customer SET name=?, address=?, salary=? WHERE id=?',
    [req.body.name, req.body.address, req.body.salary, req.body.id],
    (error, results, fields) => {
      if (error) {
        res.status(500).json({ message: 'Error' });
      } else {
        res.status(200).json({ message: 'Success' });
      }
    }
  );
};

const DeleteCustomer = (req, res) => {
  connection.query(
    'DELETE FROM Customer WHERE id=?',
    [req.params.id],
    (error, results, fields) => {
      if (error) {
        res.status(500).json({ message: 'Error' });
      } else {
        res.status(200).json({ message: 'Success' });
      }
    }
  );
};

function saveCustomer(callback) {
  connection.query(
    'SELECT id FROM Customer ORDER BY id DESC LIMIT 1',
    (error, results, fields) => {
      if (results[0]) {
        callback('C' + (Number.parseInt(results[0].id.split('C')[1]) + 1));
      } else {
        callback('C1');
      }
    }
  );
}

module.exports = {
  AddCustomer,
  GetAllCustomers,
  UpdateCustomer,
  DeleteCustomer,
};
