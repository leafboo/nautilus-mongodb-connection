const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./models/userModel.cjs')

const app = express();
app.use(cors({ origin: "*" }))

// Note: 
// Nodemon is basically live server but for node
// Model is required to be able to perform CRUD to the database
// Use await when interacting with database

// Middleware
// So that our application can accept json 
app.use(express.json())



// routes
app.get("/", (req, res) => {
  res.send("This is the Nautilus API")
})

// GET
app.get('/users', async(req, res) => {
  try {
    const users = await User.find({}); // get all users
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({message: error.message})
  } 
});


// GET by ID
app.get('/users/:id', async(req, res) => {
  try {
    const { id } = req.params; // req.params gets the value of /:id (it's an express.js thing)
    const user = await User.findById(id);// get all users
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
});
// GET individual workpsace of a user by user ID and workspace ID
app.get('/users/:id/:workspaceId', async(req, res) => {
  try {
    const { id, workspaceId } = req.params; // req.params gets the value of /:id (it's an express.js thing)
    const user = await User.findOne({ _id: id, 'workspaces._id': workspaceId }, {workspaces:true, _id:false});
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
});

// POST
app.post('/users', async(req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch(error) {
    console.log(error.message);
    res.status(500).json({message: error.message});
  }
})


// UPDATE
app.put('/users/:id', async(req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, { $push: { workspaces: req.body } }); // appends a new object in the workspaces array
    // cannot find users with the id
    if (!user) {
      res.status(404).json({message: `cannot find user with ID ${id}`});
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})

mongoose
.connect('mongodb+srv://leafboo:passwordParaCapstone@nautilusdb.dwoon.mongodb.net/?retryWrites=true&w=majority&appName=NautilusDB', {dbName: 'NautilusTestDB'})
.then(() => {
  console.log("connected to MongoDB")
  app.listen(3000, () => {
    console.log("Node api app is running on port 3000");
  });

}).catch((error) => {
  console.log(`error: ${error}`)
})