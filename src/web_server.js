
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const router = express.Router();
const PORT = process.env.PORT || 5000

const app = express();

//database entrypoint
const ads =[
  {title: 'ETHAN LEAVITT IS THE SMARTEST MAN ALIVE!'}
]

app.use(helmet());

app.use(bodyParser.json());

app.use(cors());

app.use(morgan('combined'));

// router.get('/', function(req,res){
//   res.sendFile(path.join('The-Democratic-Sun', '/Democratic_Sun.html'))
// });

app.get('/', (req,res)=> {
  res.send(ads[0].title);
  //res.sendFile(path.join('/Democratic_Sun.html'));
});

console.log("dirname: "+dirname);

app.listen(PORT, ()=>{
  console.log('listening on port '+PORT)
});