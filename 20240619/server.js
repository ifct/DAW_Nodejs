const http = require('http');

const tareas = [
    {id:1, tarea:'primera'},
    {id:2, tarea:'segunda'},
    {id:3, tarea: 'tercera'}
];

    const server =http.createServer((req,res)=>{ 
    const {method,url} = req;

    // Procesar petición de crear
    let body = []; 
    req.on('data', fragmento =>{
        body.push(fragmento);
    }).on('end', ()=>{
        body = Buffer.concat(body).toString();
        // return body; NO FUNCIONA solucionar ERROR
        // console.log(body);
        
        // Respuesta del servidor
        let estado = 404;
        const respuesta = {
        success: false,
        data: null
       }

        // Evaluar si el método es get y la url="/tareas"  
        if(method==='GET' && url==='/tareas/ver'){
            estado = 200;
            respuesta.success = true;
            respuesta.data = tareas
        }else if(method==='POST' && url === '/tareas/crear'){
            const {id, text} = JSON.parse(body);
            tareas.push({id,text});
            estado = 201;
            respuesta.success = true;
            respuesta.data = tareas
        }
        res.writeHeader(estado, {
            'Content-Type': 'application/json',
            'Desarrollado': 'Curso DAW'
        });
        res.end(
            JSON.stringify(respuesta)
       );
    })    
});

const PORT = 5000;
server.listen(PORT, ()=> console.log(`Server operativo en el puerto ${PORT}`));