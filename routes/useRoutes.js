const express = require("express");
const UserModel = require("../db/db");
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        res.status(200).send('Api is Working');
    } catch (error) {
        console.log('There is one error ');
    }
});

router.post('/api', async (req, res) => {
    try {
        const data = UserModel(req.body);
        await data.save();
        res.status(201).send('api contact');
    } catch (error) {
        res.status(401).send(error);
    }
});


module.exports = router;