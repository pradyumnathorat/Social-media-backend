const mongoose  = require('mongoose');
const schema = mongoose.Schema;

const postSchema = schema({
    author : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    selectFile : {
        type: String,
        required: true
    },
    likes : {
        type: Number,
        default: 0
    },
    comments : {
        type: [String]
    }
})

const postModel = mongoose.model('Post', postSchema);

module.exports = postModel;