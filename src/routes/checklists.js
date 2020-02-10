const express = require('express');

const router = express.Router();

router.get('/', ((req, res) => {
    console.log('Ola Mundo');
    res.send();
}))

router.get('/:id', ((req, res) => {
    console.log(req.params.id);
    res.send(`ID : ${req.params.id}`)
}))

router.post('/', ((req, res) => {
    console.log('Rota Post');
    res.status(201).send(req.body);
}))

module.exports = router;