var jsonfile = require('jsonfile');

var file_mongodbsql='\\db_module\\mongosql.json';
var file_mysqldbsql ='';


var getJSONSQL =function (dbname) {

    var file_name ='';
    if(dbname==='MONGO')
      file_name=process.cwd()+'\\db_module\\mongosql.json';
    if(dbname==='MYSQL')
      file_name=process.cwd()+'\\db_module\\mysql.json';

var jsonObj =jsonfile.readFileSync(file_name);

return jsonObj;
    
}

var getMONGOJSON =function(){
      return getJSONSQL('MONGO');
}


var getMYSQLJSON =function(){
          return getJSONSQL('MYSQL');
}




module.exports ={
getJSONSQL,
getMONGOJSON,
getMYSQLJSON


}
