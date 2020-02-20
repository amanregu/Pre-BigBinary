const mongoose = require('mongoose');
const { Schema } = mongoose;

const typeEnum = ['Public', 'Private', 'Sources', 'Forks', 'Archived', 'Mirrors'];

const repositorySchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, enum: typeEnum },
    language: { type: String }
})

module.exports = mongoose.model('Repository', repositorySchema);
