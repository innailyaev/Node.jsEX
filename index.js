const http = require('http');
const port = 8000;

const users = [
    { name: "Itay",id:1},
    { name:"Evgeni",id:2},
    { name:"Star",id:3}]

const server = http.createServer((req,res)=>{
    if(req.method==='GET'){
        if(req.url === '/'){
            res.write("Hello");
        }
        if(req.url === '/getAll'){
            res.write(JSON.stringify(users));
        }
    }
    res.end();
})

server.listen(port,()=>{
    console.log("Server run at port" + port);
})