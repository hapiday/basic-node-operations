const fs = require("fs");

//write out data
function done(output) {
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
}

//where we will store our commands
function evaluateCmd(userInput) {
 //parses the user input to understand which command was typed
  const userInputArray = userInput.split(" ");
  const command = userInputArray[0];
}

switch (command) {
   case "echo":
     commandLibrary.echo(userInputArray.slice(1).join(" "));
     break;

   case "cat":
      commandLibrary.cat(userInputArray.slice(1));
      break;

   case "head":
      commandlibrary.head(userInputArray.slice(1));
      break;

   case "tail":
      commandlibrary.tail(userInputArray.slice(1));
      break;

    default:
      process.stdout.write('Typed command is not accurate');
    }
}
const commandLibrary = {
  "echo": function(userInput) {
    done(userInput);
  },
  "cat": function(fullPath) {
     const fileName = fullPath[0];
     fs.readFile(fileName, (err, data) => {
         if (err) throw err;
         done(data);
     });
 },
 "head": function(fullPath) {
    const fileName = fullPath[0];
    fs.readFile(fileName, (err, data) => {
        if (err) throw err;
         var text = data.toString('utf8');
         var slicedText = text.split('\n').slice(0,10).join('\n');
         var bufferText = Buffer.from(slicedText, 'utf8');
         done(bufferText);
    });
 "tail": function(fullPath) {
    const fileName = fullPath[0];
    fs.readFile(fileName, (err, data) => {
        if (err) throw err;
        done(data);
        var text = data.toString('utf8');
        var slicedText = text.split('\n').slice(-10).join('\n');
        var bufferText = Buffer.from(slicedText, 'utf8');
        done(bufferText);
    });
};

module.exports.commandLibrary = commandLibrary;
module.exports.evaluateCmd = evaluateCmd;

function reverseWord(word){
	var stack = [];
	for(let i=0; word.length > i; i++){
		stack.push(word[i]);
	}
	console.log(stack);

	var reversed = '';
	while(stack.length > 0){
		console.log('went to while');
		var letter = stack.pop();
		reversed += letter;
	}
return reversed;
}

function reverse(phrase){
    var words = phrase.split('');
    var allPhrases = '';
    words.forEach(function(word){
        var reversedWord = reverseWord(word);
        allPhrase += reverseWord;
    });

    return allPhrases;
    }
