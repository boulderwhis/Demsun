
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join('The-Democratic-Sun', 'public')))
  .set('views', path.join('The-Democratic-Sun', 'views'))
  .set('view engine', 'ejs') //html
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

// IT"S LOOKING FOR A PAGES/INDEX FOLDER. CREATE PAGES FOLDER









//   var http = require('http'),
//     fs = require('fs');


// fs.readFile('./Democratic_Sun.html', function (err, html) {
//     if (err) {
//         throw err; 
//     }       
//     http.createServer(function(request, response) {  
//         response.writeHeader(200, {"Content-Type": "text/html"});  
//         response.write(html);  
//         response.end();  
//     }).listen(PORT);
// });