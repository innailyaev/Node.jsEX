const http = require('http');
const Url = require('Url');
const usersJson = require('./users.json');
const port = 8000;

const server = http.createServer((req,res)=>{
    q=Url.parse(req.url,true).query;
    console.log(q);

    if(req.method==='GET'){
        if(req.url === '/'){
            res.write("Hello");
        }
        if(req.url === '/users'){
            res.write(JSON.stringify(usersJson.users));
        }
        else if(req.url.includes('user')){
            if(q.id)
                res.write(JSON.stringify(usersJson.users[q.id]));
            else
            res.write(JSON.stringify(usersJson.users.filter((user)=>{
                return user.capsule === parseInt(q.capsule)
            })));

            
        }
    }
    res.end();
})

server.listen(port,()=>{
    console.log("Server run at port" + port);
})