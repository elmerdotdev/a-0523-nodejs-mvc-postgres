// controllers/userController.js

const connectToDatabase = require('../models/userModelClient');

const getUsers = async (req, res) => {
    const client = await connectToDatabase();
    try {
        const result = await client.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        res.status(500).send(err.message);
    } finally {
        client.end();
    }
};

const getUserById = async (req, res) => {
  const client = await connectToDatabase();
  try {
      const { id } = req.params;
      const result = await client.query(`SELECT * FROM users WHERE id = ${id}`);
      if (result.rows.length > 0) {
          res.json(result.rows[0]);
      } else {
          res.status(404).send('User not found');
      }
  } catch (err) {
      res.status(500).send(err.message);
  } finally {
      client.end();
  }
};

const createUser = async (req, res) => {
    const client = await connectToDatabase();
    try {
        const { name } = req.body;
        await client.query(`INSERT INTO users (name) VALUES ('${name}')`);
        res.status(201).send('User created');
    } catch (err) {
        res.status(500).send(err.message);
    } finally {
        client.end();
    }
};

const updateUser = async (req, res) => {
    const client = await connectToDatabase();
    try {
        const { id } = req.params;
        const { name } = req.body;
        await client.query(`UPDATE users SET name = '${name}' WHERE id = ${id}`);
        res.send('User updated');
    } catch (err) {
        res.status(500).send(err.message);
    } finally {
        client.end();
    }
};

const deleteUser = async (req, res) => {
    const client = await connectToDatabase();
    try {
        const { id } = req.params;
        await client.query(`DELETE FROM users WHERE id = ${id}`);
        res.send('User deleted');
    } catch (err) {
        res.status(500).send(err.message);
    } finally {
        client.end();
    }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}