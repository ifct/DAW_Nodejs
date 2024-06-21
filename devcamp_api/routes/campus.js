const expres = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.status(200).json({success:true, msg: 'Lista de todos los campus'});
}); 

router.get('/:id', (req,res)=>{
    res.status(200).json({success: true, msg: `Info del campus ${req.params.id}`});
});

router.post('/', (req,res)=>{
    res.status(201).json({success:true, msg:"Elemento creado"});
});

router.put('/:id', (req,res)=>{
    res.status(200).json({success: true, msg: `Elemento modificado ${req.params.id}`});
});

router.delete('/:id', (req,res)=>{
    res.status(200).json({success: true, msg: `Elemento eliminado ${req.params.id}`});
});

module.exports = router;
