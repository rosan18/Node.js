'use strict';

// TODO: Write the homework code in this file

const fs = require('fs');
const FILE = './todo.txt';
const UTF8 = 'utf8';
const cmd = process.argv[2];
const args = process.argv.slice(3);

function help() {
  console.log(`
    list: full list
    add: add item
    remove: remove item
    reset: reset list
  `);
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

switch(cmd) {

  case 'help':
    help()
    break;

  case 'list':
    readFile()
      .then(data => console.log(`To-do list:\n${data}`))
      .catch(err => console.log(err));
    break;

  case 'add':
    appendFile(args)
      .then(() => readFile())
      .then(data => console.log(`To-do:\n${data}`))
      .catch(err => console.log(err));
    break;

    case 'remove':
    let newData;
    readFile()
      .then(data => newData = data.split(`\n`).slice(args).join(`\n`))
      .then(() => writeFile(newData))
      .then(() => readFile())
      .then(data => console.log(`To-do:\n${data}`))
      .catch()
    break;

  case 'reset':
    cleanFile()
      .then(() => console.log(`Clear txt file`))
      .catch(err => console.log(err))
      break;

  default:
    break;
}