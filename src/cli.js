#!/usr/bin/env node
const names = require("all-the-package-names");
const spawn = require("child_process");
let npm = require("npm");
let cwd = process.cwd();
let batchNo = process.argv[2];
let max = names.length;
let batchsize = 50;

let batches = []

let curr = [];
for(let i = 0; i < max; i++){
    curr.push(names[i]);
    if(curr.length > batchsize){
        batches.push(curr);
        curr = [];
    }
}
console.log(__filename);
// The most bootleg fork ever
if (batchNo){
    console.log(batchNo);
    installBatch(batchNo);
}else{
    let i = 0;
    let pool = 0;

    while(i < batches.length){
        // Dirty hack with easy injection potential
        console.log(i);
        let batchProc = spawn.execFileSync("node", [__filename, i]);
        console.log(batchProc.stdout);
        i++;
    }
}

function installBatch(ind){
        npm.load({}, function(err) {
            npm.commands.install(batches[ind], function(err){
            });
        });
}