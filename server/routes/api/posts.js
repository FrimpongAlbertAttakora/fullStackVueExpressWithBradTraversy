const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});


// Connecting to database
async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect(
        'mongodb+srv://Albert:1234@cluster0-rprnm.mongodb.net/test?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
    return client.db('vue_express').collection('posts')
}


module.exports = router;