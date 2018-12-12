const mongoose = require('mongoose');

const Article = mongoose.Schema(
    {
        title: { type: String },
        content: { type: String }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Wiki_Articles', Article);
