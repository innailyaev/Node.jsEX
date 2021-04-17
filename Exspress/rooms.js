const express = require('express'); //express server
const fs = require('fs');
const router = express.Router(); // router from express library
const roomsJson = require('./rooms.json');
const rooms = roomsJson;

router.get('/',(req,res)=>{
    return res.status(200).json({rooms : roomsJson})
}).get('/:roomNumber',(req,res)=>{
    return res.status(200).json({room : rooms[req.params.roomNumber]})
}).post('/',(req,res)=>{
    console.log(req.body);
    if((roomsJson.filter((r)=>(r.roomNumber==req.body.roomNumber))).length==0){
        rooms.push({
            roomNumber: req.body.roomNumber,
            Amount: req.body.Amount,
            isActive:true,
            workers:[]
        })
    fs.writeFileSync('./rooms.json',JSON.stringify(rooms));
    return res.status(200).json({success: 'room added to DB'});
    }
    else{
        return res.status(200).json({success: 'room with this room number already exists in DB'});
    } 
}).post('/:roomNum/:id',(req,res)=>{
    console.log(req.params);
    let result = rooms.find((r)=>{
        return r.roomNumber == req.params.roomNum;
    })
     if(result){
       rooms.map((r)=>{
           if(r.roomNumber == req.params.roomNum && r.isActive == true){
               r.workers.push(parseInt(req.params.id));
               fs.writeFileSync('./rooms.json',JSON.stringify(rooms));
               return res.status(200).json({success: 'worker added to the room'});
           }
           else{
            return res.status(200).json({success: 'This room is not active'});
           }
       })  
     }
     else{
        return res.status(200).json({success: 'There is no room with this room number'});
     }

}).delete('/:roomNum/:id',(req,res)=>{
    let result = rooms.find((r)=>{
        return r.roomNumber == req.params.roomNum;
    })
     if(result){
       rooms.map((r)=>{
           if(r.roomNumber == req.params.roomNum){
                r.workers.map((w,index)=>{
                    if(w == req.params.id){
                        console.log(r.roomNumber, w);
                        r.workers.splice(index,1);
                        return res.status(200).json({success: 'This worker was removed from the room'});
                    }
                    // else{
                    //     return res.status(200).json({success: 'There is no worker with this id in that room'});
                    // }
                })
           } 
           else{
            return res.status(200).json({success: 'This room is not active'});
           }
       })  
     }
     else{
        return res.status(200).json({success: 'There is no room with this room number'});
     }
});

module.exports = router;

