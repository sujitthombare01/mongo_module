var jsonfile = require('jsonfile');



var file = process.cwd()+'\\db_module\\mongosql.json'

var jsonObj =jsonfile.readFileSync(file);

console.log(jsonObj['tableone']+' : table one');