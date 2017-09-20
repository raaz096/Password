var fs = require("fs");
var yargs = require("yargs");
var base64 = require('base-64');
var utf8 = require('utf8');

//var data = "i am vishal and want to write in record.txt file.";


const argv = yargs.argv;
var command = process.argv[2];
var user = process.argv[3];

var password = process.argv[5];
var bytes = utf8.encode(password);
var encoded = base64.encode(bytes);
//console.log(encoded);



console.log("command", command);
console.log("Process", process.argv);
console.log('Yargs: ', argv);

fs.appendFile("record.txt", ` user : ${user} \n `, (err) => {
  if (err) throw err;
  console.log('User Name has been saved!');
});


fs.appendFile("record.txt", `Password : ${encoded} \n `, (err) => {
  if (err) throw err;
  console.log('Password has been saved!');
});


if(command === 'add'){
	console.log("Adding notes.");
}else {
	console.log("Command Does Not exist.");
}