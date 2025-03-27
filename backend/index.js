const express = require('express');
const mongoose = require('mongoose')
const User = require('./models/userModel.cjs')
const ResearchWorkspace = require('./models/researchWorkspaceModel.cjs')
const NewsWorkspace = require('./models/newsWorkspaceModel.cjs')

const app = express();
// Note: 
// Nodemon is basically live server but for node
// Model is required to be able to perform CRUD to the database
// Use await when interacting with database

// Middleware
// So that our application can accept json 
app.use(express.json())



// routes
app.get("/", (req, res) => {
  res.send("Hello Node API")
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
app.get('/researchWorkspaces', async(req, res) => {
  try {
    const researchWorkspaces = await ResearchWorkspace.find({});
    res.status(200).json(researchWorkspaces);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})
app.get('/newsWorkspaces', async(req, res) => {
  try {
    const newsWorkspaces = await NewsWorkspace.find({}); 
    res.status(200).json(newsWorkspaces)
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})


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
app.get('/researchWorkspaces/:id', async(req, res) => {
  try {
    const { id } = req.params;
    const researchWorkspaces = await ResearchWorkspace.findById(id);
    res.status(200).json(researchWorkspaces);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})
app.get('/newsWorkspaces/:id', async(req, res) => {
  try {
    const { id } = req.params;
    const newsWorkspaces = await NewsWorkspace.find(id); 
    res.status(200).json(newsWorkspaces)
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})

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

app.post('/researchWorkspaces', async(req, res) => {
  try {
    const researchWorkspace = await ResearchWorkspace.create(req.body);
    res.status(200).json(researchWorkspace);

  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message});
  }
})

app.post('/newsWorkspaces', async(req, res) => {
  try {
    const newsWorkspace = await NewsWorkspace.create(req.body);
    res.status(200).json(newsWorkspace);

  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message});
  }
})

// UPDATE
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