function* writeToTextFile() {
    fs.writeFile('Output.txt', data, (err) => {

        // In case of a error throw err. 
        if (err) throw err;
    })
}

function readFrom() {

}