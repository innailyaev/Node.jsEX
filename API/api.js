const axios = require('axios');
const request = require('request');


const getBreeds = () => {
   
       axios.get('https://dog.ceo/api/breeds/list/all').then(
            result=>{console.log("Result",result);}
        ).catch (error =>{
            console.log(error)
        })
      
}
  
  getBreeds();

    request({url:'https://dog.ceo/api/breeds/list/all', json:true}, function (error, response, body) {
        console.log(response.body);
});