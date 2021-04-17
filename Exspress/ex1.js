const express = require('express'); //express server
const bodyParser = require('body-parser');
const app = express();
const port =8000;
const workersRoute = require('./workers');
const roomsRoute = require('./rooms');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/workers',workersRoute);
app.use('/api/rooms',roomsRoute);


app.listen(port,()=>{
    console.log(`application start at ${port}`)
})
