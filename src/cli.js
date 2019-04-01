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

// The most bootleg fork ever
if (batchNo){
    installBatch(batchNo);
}else{
    let i = 0;
    let pool = 0;
    console.log(i);
    while(i < batches.length){
        if (pool < 10){
            let child = spawn.fork(__filename, [i]);
            i++;
            pool++;
            child.on("exit", function(code, signal){
                pool--;
            });
        }
    }
}

function installBatch(ind){
        npm.load({}, function(err) {
            npm.commands.install(batches[ind], function(err){
            });
        });
}