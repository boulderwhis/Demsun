<!DOCTYPE html>
<html>
<title>PlayBox</title>

<script>
const sql_Http = new XMLHttpRequest();
function opensecrets_call(){
    test_url_cb('https://www.opensecrets.org/api/?method=candSummary&cid=N00009888&cycle=2020&output=json&apikey=dcf447b80edb32e28cb162c2d0548e77',function(rtnd_JSON){
        console.log(rtnd_JSON.response.summary["@attributes"].state); //opensecrets.response.summary["@attributes"].state
    })
}

function test_url_cb(url_to_call_2, cb){
    get_from_db( url_to_call_2, function(data){
        cb(JSON.parse(data));
    });
}

function get_from_db(url, cb){
    Go_to_db(url,"GET",cb);
}

function post_to_db_2(url,data, cb){
    Go_to_db(url,"POST",cb, data);
}

function put_to_db(url, cb){
    Go_to_db(url,"PUT",cb);
}

function Go_to_db(url, ajax_call, cb, data){
    var chk = false;
    if (ajax_call == "GET"){
        sql_Http.open("GET", url, true);
        chk = true;
    } else if (ajax_call == "POST"){
        sql_Http.open("POST", url, true);
        sql_Http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        //sql_Http.setRequestHeader("Content-Type", "text");
        chk = true;
    } else if (ajax_call == "PUT"){
        sql_Http.open("PUT", url, true);
        chk = true;
    }

    if (chk){
        sql_Http.onreadystatechange = function(e){
            if (sql_Http.readyState == 4){
                try {
                    cb(sql_Http.responseText);
                } catch (error) {
                    cb(sql_Http.responseText);
                }
                //document.getElementById('demo').innerHTML=sql_Http.responseText;
                //console.log(sql_Http.responseText);
            }
        }
        if (ajax_call == "POST"){
            sql_Http.send(JSON.stringify({"DATA": data}));
        } else {
            sql_Http.send();
        }
    }
}

opensecrets_call()
</script>
    
</body>
</html> 
