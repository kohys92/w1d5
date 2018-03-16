var lists = require("./createExportModules");

lists.add(33, 21);
lists.add(70);
lists.add(7);
lists.add(1, 4, 6);
console.log(lists.sort());