const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const PORT = process.env.PORT || 5000
const app = express();
var fs = require('fs');
var http = require('http');


//database entrypoint
app.use(helmet());

app.use(bodyParser.json());

app.use(cors());

app.use(morgan('combined'));

var path_2 = '/app/src/';

app.use(express.static(path_2));

app.get('/', (req,res)=> {
    fs.readFile('/app/src/Democratic_Sun.html', function(err, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
     return res.end();
   });
});



app.get("/engine.js",(req, res) => res.end(fs.readFileSync(path_2+"engine.js")));
app.get("/style.css",(req, res) => res.end(fs.readFileSync(path_2+"style.css")));


app.get('/nick', (req, res)=>{
  res.end("Nick is wizard and also a huge bitch ")

});

app.get('/ethan', (req,res)=> {
  res.end("Ethan is the smartest man alive");
});

app.get('/target:data', (req,res)=> {
  var id_mofo = req.url.split(":")[1].toString();
  console.log(req,"%o Hey Nick, not sure this does anything here but identify end of req for searchability? "); // see %o in heroku web server log... maybe this is something you have to do inside your networks? 
  console.log(id_mofo);
  res.end("Hi curious person :) "+req.url.split(":")[1].toString());
});


app.listen(PORT, ()=>{
  console.log('listening on port '+PORT);
  // console.log("dirname = " +__dirname);
});