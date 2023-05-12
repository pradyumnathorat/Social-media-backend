
const postModel = require('./postModel');

const createData = async (req, res) => {
    try {
        const data = req.body;
        const post = await postModel.create(data);
        res.status(201).json({ message: "Post Created" })
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}

const getPosts = async (req, res) => {
    try {
        const posts = await postModel.find();
        res.status(200).json({ data: posts })
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}
const getSinglePost = async (req, res) => {
    try {
        const { _id } = req.params
        const SinglePost = await postModel.findById(_id);
        res.status(200).json(SinglePost)
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}
const LikePost = async (req, res) => {
    try {
        const { _id } = req.params
        const post = await postModel.findById(_id);
        const updatePost = await postModel.findByIdAndUpdate(_id, { likes: post.likes + 1 }, { new: true });

        res.status(200).json(updatePost)
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}

const commentPost = async (req, res) => {
    try {
        const { _id } = req.params;
        const updatedItem = await postModel.findOneAndUpdate(
            { _id: _id },
            { $push: { comments: req.body.comment } },
            { new: true }
        );
        res.status(200).json(updatedItem)
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}

module.exports = { createData, getPosts, LikePost, commentPost, getSinglePost }