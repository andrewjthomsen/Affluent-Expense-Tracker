// Imports all files that are in the same folder, and re-exports them.
// Lets you require() the containing folder and get everything inside, instead of each require()ing file individually.
let fs = require('fs');

let models = {};

fs.readdirSync(__dirname)
    .filter(fileName => { 
        return fileName.slice(-3) == '.js' && fileName != 'index.js' })
    .forEach(fileName => {
        let model = require('./' + fileName);
        models = Object.assign({}, models, model);
});

module.exports = models;