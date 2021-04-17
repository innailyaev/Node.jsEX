const express = require('express'); //express server
// const fs = require('fs');
const router = express.Router(); // router from express library
// const workersJson = require('../workers.json');
const workers = [
    {
        id: 0,
        fullName: "inna ilyaev",
        isActive:false
    },
    {
        id: 1,
        fullName: "star ilyaev",
        isActive:false
    }
]

router.get('/',(req,res)=>{
    return res.status(200).json({workers : workers})
}).get('/:id',(req,res)=>{
    return res.status(200).json({worker : workers[req.params.id]})
}).post('/',(req,res)=>{
    console.log(req.body);
    let id= req.body.id;
    let name=req.body.fullName;
    console.log(name,id);
    if(!name || !id){
        return res.status(200).json({NoSuccess:'Enter id and name'});
    }
    if(name.length < 6 || !(name.includes(' '))){
        return res.status(200).json({error:'Name must have space and length be bigger then 5'});
    }
    if((workers.filter((w)=>(w.id==req.body.id))).length==0){
        workers.push({
            id:req.body.id,
            fullName: req.body.fullName,
            isActive:false
        })
    return res.status(200).json({success: 'user added to DB'});
    }
    else{
        return res.status(200).json({success: 'user with id already exists in DB'});
    }
    
    // res.send(req.body);
    
    // fs.writeFileSync(workersJson, req.body);
})

module.exports = router;

