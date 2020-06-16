// const cluster = require('cluster');
// const numCPUs= require('os').cpus().length;

// if(cluster.isMaster) {
//   console.log('Master %s is running', process.pid);

//   for (i=0; i<numCPUs; i++){
//     cluster.fork();
//   }

//   cluster.on('exit', function(worker) {

//     console.log('Worker %d died :(', worker.id);
//     cluster.fork()
//   });



// }else {





const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const router = express.Router();
const PORT = process.env.PORT || 5000

const app = express();

console.log(path.dirname("the-democratic-sun"));

var abs_path_2='The-Democratic-Sun'+"/tubular";

// console.log("\nRoot directory: "+ _dirname+"\n");
// console.log("\nabs_path_2: "+abs_path_2+"\n");

//database entrypoint
const ads =[
  {title: 
                    "ETHAN LEAVITT IS THE SMARTEST MAN ALIVE!"
}
]


app.use(helmet());

app.use(bodyParser.json());

app.use(cors());

app.use(morgan('combined'));

app.use(express.static(abs_path_2));

app.get("/",(req,res)=>res.end(fs.readFileSync("Democratic_Sun.html")));



// app.get('/', (req,res)=> {
//   res.send(ads[0].title);
//   res.sendFile(path.join('Democratic_Sun.html'));
// });


app.listen(PORT, ()=>{
  console.log('listening on port '+PORT)
});

// }