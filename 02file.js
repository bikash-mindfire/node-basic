const fs = require('fs').promises
const path = require('path')

// Without promise , callback hell

// fs.readFile(path.join(__dirname, 'files','starter.txt'), (err, data) => {
//     if (err) throw err;
//     console.log(data.toString())
// })

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Ohh ok',(err) => {
//     if (err) throw err;
//     console.log("Write complete")
//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), 'Ohh ok gooo',(err) => {
//         if (err) throw err;
//         console.log("Append complete")
//         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
//             if (err) throw err;
//             console.log("Rename complete")
//         })
//     })
// })

const fileOps = async () => {
    await fs.unlink(path.join(__dirname, 'files', 'newreply.txt'))
    const data = await fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
    console.log(data)
    await fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), data);
    await fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nOhh ok gooo');
    await fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newreply.txt'));
    const data2 = await fs.readFile(path.join(__dirname, 'files', 'newreply.txt'), 'utf8');
    console.log(data2)
}

fileOps()



// Exit on uncaught error
process.on('uncaughtException', function (err) {
    console.log('UNCAUGHT EXCEPTION: ' + err);
    process.exit(1);
})