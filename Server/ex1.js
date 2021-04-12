const http = require('http');
const port = 8000;

const server = http.createServer((req,res)=>{
    if(req.method==='GET'){
        if(req.url === '/getAll'){
            res.write("welcome");
        }
    }
    res.end();
})

server.listen(port,()=>{
    console.log("Server run at port" + port);
})