const fs = require("fs");

const content = "Some content!";

const path = "enter path here. it should be relative"; // Enter the path where the file will b written

// now lets see how to create a function that wil do that for us
function writeToTextFile(content, pathToFile) {
  fs.writeFile(pathToFile, content, err => {
    if (err) {
      // if there is an error that occurred
      console.error(err);
      // return; //stop program execution here
    }
    console.log("file written successsfully");
    //file written successfully
  });
}

// these variables path and content are up there. just passing them here
writeToTextFile(content, path);
