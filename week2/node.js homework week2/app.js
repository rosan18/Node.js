'use strict';
const cmd = process.argv[3];
var fs = require('fs')
const STORE_FILE_NAME ='todo.txt';
const DEFAULT_ENCODING = 'utf8';
const args =process.argv.slice(2);
function printHelp(){
    console.log(
        ` Options:
          add: add item
          remove: remove an item by index
          help: Show all todo items
          list:Show all todo items
          reset: Removes all todo items`
    )
}
switch(cmd){
    case 'add':
    fsOperations.appendFile(args)
    .then(() => fsOperations.readFile())
    .then(data => console.log(`To-Dos:\n${data}`))
  
    break;
     case 'list':
    readFile()
      .then(data => console.log(`To-do list:\n${data}`))
      .catch(err => console.log(err));
    break;

    case 'help':
      printHelp()
      break;
      default:
    case 'remove':
       var newData
       fsOperations.readFile()
       .then(data => newData = data.split(`\n`).slice(args).join(`\n`))
       .then(() =>fsOperations.writeFile(newData))
       .then(() =>readFile())
       .then(data => console.log(`content: ${data}`))
    
        break;

    case 'reset':
    cleanFile()
      .then(() => console.log(`Clear txt file`))
      .catch(err => console.log(err))
      break;

  default:
    break;  
        
  }
let readFile = () => {
  return new Promise ((res, rej) => {
    fs.readFile(FILE, UTF8, (err, data) => {
      err ? rej(err) : res(data)
    })
  })
}

let appendFile = (args) => {
  return new Promise ((res, rej) => {
    fs.appendFile(FILE, `${args.join('')}\n`, (err, data) => {
      err ? rej(err) : res(data)
    })
  })
}

let cleanFile = () => {
  return new Promise ((res, rej) => {
    fs.writeFile(FILE, '', (err, data) => {
      err ? rej(err) : res(data)
    })
  })
}

let writeFile = (content) => {
  return new Promise ((res, rej) => {
    fs.writeFile(FILE, content, (err, data) => {
      err ? rej(err) : res(data)
    })
  })
}


