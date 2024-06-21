const express = require('express');
const router = express.Router();

router.get('/all', (req,res)=>{
    res.status(200).send('<h2>Listado de todos los alumnos</h2>');
});

router.get('/:username', (req,res)=>{
    res.status(200).send(`<h2>Perfil de usuario ${req.params.username}</h2>`);
});

module.exports = router;
