#!/usr/bin/env node
const ind = require("./index.js");
var stdin = process.stdin;
stdin.setEncoding('utf-8');

console.log("Do you really want to do this (Y/N)?");

stdin.on('data', function(data){
    if(data.toUpperCase().trim() === 'Y'){
        console.log("Welp");
        ind.install_it_all();
        process.exit();
    }else{
        console.log("Exiting");
        process.exit();
    }

});