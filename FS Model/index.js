const fs = require('fs');

//Creating File
fs.writeFile("index.txt", "tesing", (err) => {
    if (err) {
        console.log(rerr.message);
    } else {
        console.log("File Written Successfully")
    }
})

//Read File
fs.readFile("index.txt", (err, data) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(data);
    }
})

//Rename File
fs.rename("index.txt", "index.html", err => {
    if (err) {
        console.log("err.message");
    } else {
        console.log("File renamed successfully");
    }
})

//Append File
fs.appendFile("index.txt", "\n node", (err) => {
    if (err) {
        console.log("err.message");
    } else {
        console.log("Data Added");
    }
})

// Delete File
fs.unlink("index.txt", (err) => {
    if (err) {
        console.log("err.message");
    } else {
        console.log("unlinked successfully")
    }
})