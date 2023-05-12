const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config();
app.use(cors());
app.use(express.json({limit: '50mb'}));
const port = process.env.PORT || 3000;
const postRoutes = require('./routes');

app.use( "/" , postRoutes)

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(port, () => {
        console.log(`Server is running on ${port}`);
    })).catch((err) => {
        console.log(err.message);
    });