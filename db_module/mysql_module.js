var mysql = require('mysql');
var jsonreader = require('./json_reader');

console.log('In the mysql db module');


// set connection to con object
var connection = function  getConnection(dbNumber)
{

// if dbNumber not defined set as default connection i.e. 0
    if(dbNumber===undefined)
            dbNumber=0;


     var con =  mysql.createConnection(    
                                // read mysql json file to connection properties
                                jsonreader.getMYSQLJSON().connection[dbNumber]
                        );       


    return con;


};

var executeSQL = function(sqlString , connectionID)
{

if(connectionID===undefined)
  connectionID=0;

var db =connection();
var msg= db.query(sqlString);


db.end();


}



//executeSQL('create table t1 (t1col char(20))');
executeSQL('drop table t1');


module.exports ={

connection // connection object

};