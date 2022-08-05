const fs = require('fs');
const path = require('path');

if (!fs.existsSync(path.join(__dirname, 'new'))) {
    fs.mkdir('./new', (err) => {
        if (err) throw err;
        console.log("Directory created");
    })
}

if (fs.existsSync(path.join(__dirname, 'new'))) {
    fs.rmdir('./new', (err) => {
        if (err) throw err;
        console.log("Directory deleted");
    })
}