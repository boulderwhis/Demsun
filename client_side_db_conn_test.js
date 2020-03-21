const Http = new XMLHttpRequest();
function SendRequest(choice){
var url='';
if (choice == 'path1'){
    url = 'http://localhost:8081/path1';
} else{
    url = 'http://localhost:8081/path2';
}
Http.open("GET", url, true);
Http.onreadystatechange = function(e){
    if (Http.readyState == 4){
    document.getElementById('demo').innerHTML=Http.responseText;
    console.log(Http.responseText);
    }
}
Http.send();
}
var http = require('http');
var db = require('./db');
var url = require('url');
var express = require('express');
var app = express();
var fs = require("fs");

app.get('/path:id', function (req, res) {
    console.log("Connection Made");
    res.header("Access-Control-Allow-Origin", "*");//<<------ this line #1
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");//<<------ this line #2
    // lines marked with "<<------ this line #1&2" is the fix for the 'Access-Control-Allow-Origin' header problem..
    // in short the 'Access-Control-Allow-Origin' header problem doesn't allow/ blocks the server callback to the browser by setting
    // "Access-Control-Allow-Origin" to accept all in coming callbacks the browser allows callbacks/ doesn't block the callback
    var txt = req.url.split("/")[1];
    if (!txt == ""){
        _Ppath(txt, function (data){
            if (data == null){
                console.log("nothing was returned from _Ppath");
            } else {
                console.log("returning: "+JSON.stringify(data));
                res.end(JSON.stringify(data));
            }          
        });
    }
})

 var _Ppath = function (choice, cb){
    db.PickPath(choice, function(data){cb(data)});
}

 var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })
