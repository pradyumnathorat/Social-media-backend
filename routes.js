const express = require('express');
const routes = express.Router();

const APIs = require('./controllers')

routes.post("/post" , APIs.createData )
routes.get("/post" , APIs.getPosts )
routes.patch("/post/:_id" , APIs.LikePost )
routes.patch("/post/comments/:_id" , APIs.commentPost )
routes.get("/post/:_id" , APIs.getSinglePost )


module.exports = routes