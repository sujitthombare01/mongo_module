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

var executeSQL = function(sqlString ,param,callback, connectionID)
{

if(connectionID===undefined)
  connectionID=0;

var db =connection();
var sql =db.format(sqlString,param);
console.log('SQL :: '+sql);
db.beginTransaction(function(err)
  {
     if (err) {  callback(err); }

            db.query(sql,function(err,results,fields)
                        {
                                if(err){ 
                                    db.rollback(function(){  console.log('Rollback sucess !!!'); callback(err); });

                                    console.log('Error Found !!!');
                                  }                               
                                else
                                   {
                                     console.log('Success !!!');
                                     callback(null,results);
                                    }
                                  
                                  
                            db.destroy();
                            console.log('Connection closed..!');
                        } );
  });




};


var executeSQLbyID =function(sqlID ,callback, connectionID)
{

}



executeSQL('create table t11 (?? char(20))',['tempcol'],function(err,results){
  if(err)
  console.log(err.code);
  else
    console.log(results);
});
//executeSQL('drop table t1');


module.exports ={

connection ,// connection object
executeSQL , // execute single sql
executeSQLbyID // execute sql by using id

};