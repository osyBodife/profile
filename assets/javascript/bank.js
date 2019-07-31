// fs is a core Node package for reading and writing files
var fs = require("fs");
var command=process.argv[2];

if(command==="deposit"){
addDeposit();
}
var total=0;
function addDeposit(deposit){
    total= deposit + total;
}


function subWithdrawal(deposit){
    total= total- subWithdrawal;
}

if(command==="withdrawal"){
    subWithdrawal();
    }
console.log (command);
//var deposit=parseInt(process.argv[2]);
//ar withdrawal=parseInt(process.argv[3]);
//var lotto=parseInt(process.argv[4]);
// This block of code will read from the "movies.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
fs.readFile("bank.txt", "utf8", function(error, data) {



  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }

  
 
  

  // We will then print the contents of data
  //console.log(data);

  // Then split it by commas (to make it more readable)
  

  // We will then re-display the content as an array for later use.
  //console.log(dataArr);

});
