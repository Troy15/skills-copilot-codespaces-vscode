// Create web server which handles REST API requests for comments
// -------------------------------------------------

const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const mongoose = require('mongoose');

// GET all comments
router.get('/', (req, res, next) => {
    Comment.find()
    .select('_id text author')
    .exec()
    .then(docs => {
        const response = {
            count: docs.length,
            comments: docs.map(doc => {
                return {
                    _id: doc._id,
                    text: doc.text,
