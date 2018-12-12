const express = require('express');
const router = express.Router();

const Article = require('./models');


// add a new article...[OK]
router.post('/add', async (req, res) => {

    let article = new Article({ title: req.body.title, content: req.body.content });
    try {
        let data = await article.save();
        res.status(201).send(data);
    } catch (e) {
        res.status(500).send(e, 'Failed to save article!');
    }
});


// route to get all articles...[OK]
router.get('/', async (req, res) => {
    try {
        let articles = await Article.find();
        res.status(200).send(articles);
    } catch (e) {
        res.status(500).send(e, 'Failed to retrieve articles from the database!');
    }
});


// route to get an article by it's ID...[OK]
router.get('/:id', async (req, res) => {
    try {
        let article = await Article.findById(req.params.id);
        res.send(article);
    } catch (e) {
        res.status(500).send(e, 'Failed to retrieve article from the database!');
    }
});


// update route...[OK]
router.put('/update/:id', async (req, res) => {
    try {
        await Article.findByIdAndUpdate(req.params.id, { title: req.body.title, content: req.body.content });
        res.send('article has been successfully updated!');
    } catch (e) {
        res.status(500).send(e, 'Failed to update article!');
    }
});


// delete route...[OK]
router.delete('/delete/:id', async (req, res) => {
    try {
        await Article.findByIdAndRemove(req.params.id);
        res.status(200).send('Successfully deleted article from the database!');
    } catch (e) {
        res.status(500).send(e, 'Failed to delete article from the database!');
    }
});


module.exports = router;
