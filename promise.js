const superagent = require("superagent")
const fs = require('fs')







fs.readFile(`${__dirname}/dog.txt` , (err , data)=>{
    if(err) return console.log(`error found : ${err}`);
    console.log(`${data}`);


    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`,(err , res)=>{
        console.log(res.body)
    });

})
