const mongoose = require('mongoose');

const researchWorkspaceSchema = mongoose.Schema(
  {
    workspaceName: {
      type: String,
      required: true
    },
    notebook: [{
      type: String,
      required: true
    }],

    researchPapers: [{
      title: {
        type: String,
        required: true
      },
      abstract: {
        type: String,
        required: true
      },
      keywords: [{
        type: String,
        required: true
      }],
      datePublished: {
        type: Date,
        required: true
      },
      authors: [{
        type: String,
        required: true
      }],
      doi: {
        type: String,
        required: true
      },
      linkToSource: {
        type: String,
        required: true
      }
    }],
    
  }
  
)

// .model(modelID, userSchema, collectionName)
const researchWorkspace = mongoose.model('researchWorkspace', researchWorkspaceSchema, 'ResearchWorkspaces');

module.exports = researchWorkspace;