
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
  {title: 'I AM THE SMARTEST MAN ALIVE!'}
]

app.use(helmet());

app.use(bodyParser.json());

app.use(cors());

app.use(morgan('combined'));

app.get('/', (req,res)=> {
  //res.send(ads[0].title);
  res.sendFile(path.join('/Democratic_Sun.html'));
})

app.listen(PORT, ()=>{
  console.log('listening on port '+PORT)
});