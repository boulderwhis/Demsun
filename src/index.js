
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const PORT = process.env.PORT || 5000

const app = express();

//database entrypoint
const ads =[
  {title: 'The sun is rising'}
]

app.use(helmet());

app.use(bodyParser.json());

app.use(cors());

app.use(morgan('combined'));

app.get('/', (req,res)=> {
  res.send(ads[0].title);
  //res.send('/')
})

app.listen(PORT, ()=>{
  console.log('listening on port '+PORT)
});