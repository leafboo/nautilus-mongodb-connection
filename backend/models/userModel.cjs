const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter your username"]
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    workspace_ids: [{
      type: mongoose.Schema.Types.ObjectID,
      required: false
    }]
    
  }
  
)

// .model(modelID, userSchema, collectionName)
const User = mongoose.model('User', userSchema, 'Users');

module.exports = User;