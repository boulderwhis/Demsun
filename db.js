var mysqlx = require('@mysql/xdevapi');

const config = {
    password: 'P@ssw0rd',
    user: 'root',
    host: 'localhost',
    port: 33060,
    schema: 'new_schema_new_db'
};

exports.PickPath = function(choice, cb){
    var q_strg = '';
    if (choice == "path1"){
        q_strg = 'select * from test_tbl';
    }
    else if (choice == "path2"){
        q_strg = 'select * from test_tbl_2';
    }
    mysql_db(q_strg, function(db_data){
        cb(db_data);
    });
}


function mysql_db (strg_2_exe, cb){
    console.log("Started mysql_db");
    mysql_exe(strg_2_exe, function(db_rcds){
        if (db_rcds == "" || db_rcds == null){
            console.log("nothing was returned from mysql_exe");
        } else{
            cb(db_rcds);
        }
    });
    console.log("Finished mysql_db");
}

function mysql_exe (strg_to_exe, cb){
    console.log("Started mysql_exe");
    var rcds = [];
    const client = mysqlx.getClient(config, { pooling: { enabled: true, maxSize: 3 } })
    client.getSession()
    .then(session => {
        session.sql(strg_to_exe).execute(doc => rcds.push(doc))
        .then(() =>{ 
            console.log("Inside client.sql.execute");
            client.close();
            console.log(rcds);
            console.log("Finished mysql_exe");
            cb(rcds);
         });
    })
}
