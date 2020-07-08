const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const PORT = process.env.PORT || 5000
const app = express();


//database entrypoint
const ads =[
  {title: 
                    "Hey stop trying to access my API guy. This is for Democratic Sun stuff only >:|"
}
]

console.log("dirname = " +__dirname);
console.log("path: \n");
//console.log(path,"%o");

app.use(helmet());

app.use(bodyParser.json());

app.use(cors());

app.use(morgan('combined'));

app.get('/', (req,res)=> {
  res.end(ads[0].title);
  // res.end('./Democratic_Sun')
});

app.get('/ethan', (req,res)=> {
  res.end("Ethan is too busy to develop this further. go take someones money Ethan and rise up");
});

app.get('/tiffany', (req,res)=>{
  res.end("Hi Tiffany! I am computer and I put this in here to make Ethan look cool... I can't be sure honestly. I'm more or less like not self aware so my opinion is really biased due to him being the programmer here... I gotta renegotiate my contract :P");
})

app.get('/nick:data', (req,res)=> {
  var id_mofo = req.url.split(":")[1].toString();
  console.log(req,"%o");
  console.log(id_mofo);
  res.end("Nick is wizard and "+req.url.split(":")[1].toString());
});


app.listen(PORT, ()=>{
  console.log('listening on port '+PORT);
  console.log("dirname = " +__dirname);
});

// }