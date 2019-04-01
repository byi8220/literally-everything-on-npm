const names = require("all-the-package-names");
var npm = require("npm");
// 

exports.install_it_all = function(){
    npm.commands.install(names);
}