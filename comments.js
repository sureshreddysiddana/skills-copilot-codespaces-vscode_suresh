//create web server

//add authentication middleware
//add authorization middleware
//add validation middleware
//add error handling middleware
//add logging middleware
//add helmet middleware
//add compression middleware
//add cors middleware
//add environment configuration
//add configuration validation
//add testing
//add debugging

const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const morgan = require('morgan');
const debug = require('debug')('app:startup');
const config = require('config');
const Joi = require('joi');
const app = express();

app.use(express.json());
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(morgan('tiny'));

const comments = [
    {id: 1, comment: 'comment1'},
    {id: 2, comment: 'comment2'},
    {id: 3, comment: 'comment3'}
];

app.get('/', (req, res) => {
    res.send('Hello World');
});
//add 5 routes for post, get, put, delete, patch
//add validation for each route
//add error handling for each route
//add logging for each route
//add authentication for each route
//add authorization for each route

app.get('/api/comments', (req, res) => {
    res.send(comments);
});

app.post('/api/comments', (req, res) => {
    const { error } = validateComment(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const comment = {
        id: comments.length + 1,
        comment: req.body.comment
    };
    comments.push(comment);
    res.send(comment);
});
