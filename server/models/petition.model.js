const mongoose = require('mongoose');

const petitionSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = Petition = mongoose.model('petitions', petitionSchema);
