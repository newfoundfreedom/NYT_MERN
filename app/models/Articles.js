// Require Dependencies
const mongoose = require("mongoose");

// Define Schema
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {
        type: String
    },
    date: {
        type: Date
    },
    url: {
        type: String
    }
});

const Articles = mongoose.model("Articles", ArticleSchema);
module.exports = Articles;
