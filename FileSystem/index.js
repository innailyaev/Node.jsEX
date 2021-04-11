const fs = require('fs');

// fs.appendFileSync('notes.txt','node js');
//1. Create a new txt file using fs module method
fs.writeFileSync('notes.txt', 'This file was created by node js');

//2. Create a copy of the newly created txt file using a method from the fs module
fs.copyFileSync('notes.txt', 'copyNotes.txt');

//3. Rename one of the files using a method from the fs module
fs.renameSync('notes.txt','newNotes.txt');

//4. Get a list of all the file names of the current directory using a method from the fs module
const folderName = '../FileSystem';
fs.readdirSync(folderName).forEach(file => {
    console.log(file);
  });

//5. Find out and implement another method for the fs module.
fs.appendFileSync('newNotes.txt', 'my name is inna');