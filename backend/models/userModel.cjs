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
    workspaces: {
      type: [{
        workspaceName: {
          type: String,
          required: true
        },
        notebook: [{
          type: String,
          required: true
        }],
    
        researchPapers: {
          type: [{
            title: {
              type: String
            },
            abstract: {
              type: String
            },
            keywords: [{
              type: String
            }],
            datePublished: {
              type: Date,
            },
            authors: [{
              type: String
            }],
            doi: {
              type: String
            },
            linkToSource: {
              type: String
            }
          }],
          default: []
          
        },
  
        newsArticles: {
          type: [{
            title: {
              type: String
            },
            summary: {
              type: String
            },
            journalists: [{
              type: String
            }],
            politicalBiasRating: {
              type: String
            },
            linkToSource: {
              type: String
            }
          }],
          default: []
        }
      }],
      required: false,
      default: []
      
    }
    
  }
  
)

// .model(modelID, userSchema, collectionName)
const User = mongoose.model('User', userSchema, 'Users');

module.exports = User;