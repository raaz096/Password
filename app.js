var fs = require("fs");
var add = require("./notes.js");

// console.log(add.add(9,2));
var yargs = require("yargs");

var command = process.argv[2];

console.log("command", command);
console.log("Process", process.argv);


if(command === 'add') {
	console.log(" Adding New Note");
}

else if(command === 'list') {
	add.getAll();
}


else if(command === 'remove') {
	add.removeAll();
}


else if(command === 'delete') {
	console.log(" Deleting New Note");
}

else {
	console.log("Command not found");
}

//console.log(process.argv);



//YARGS 
//github.com/yargs/yargs
