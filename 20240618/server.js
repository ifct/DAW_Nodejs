const http = require('http');

const tareas = [
    {id:1, tarea:'primera'},
    {id:2, tarea:'segunda'},
    {id:3, tarea: 'tercera'}
];

const server =http.createServer((req,res)=>{
    // console.log(req.method);
    const {headers,url,method} = req;
    console.log(headers,url,method);
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Desarrollado', 'Curso DAW');
    // res.write('<h1>Hola</h1>');
    // res.write('<h2>Caracola</h2>');
    res.end(
        JSON.stringify({
            success: true,
            data: tareas
        })
    );
});

const PORT = 5000;
server.listen(PORT, ()=> console.log(`Server operativo en el puerto ${PORT}`));