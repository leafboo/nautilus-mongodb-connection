const mongoose = require('mongoose');

const newsWorkspaceSchema = mongoose.Schema(
  {
    workspaceName: {
      type: String,
      required: true
    },
    notebook: [{
      type: String,
      required: true
    }],
      
    newsArticles: [{
      title: {
        type: String,
        required: true
      },
      summary: {
        type: String,
        required: true
      },
      journalists: [{
        type: String,
        required: true
      }],
      politicalBiasRating: {
        type: String,
        required: true
      },
      linkToSource: {
        type: String,
        required: true
      }
    }] 
    
    
  }
  
)

// .model(modelID, userSchema, collectionName)
const newsWorkspace = mongoose.model('newsWorkspace', newsWorkspaceSchema, 'NewsWorkspaces');

module.exports = newsWorkspace;