const util = require("util");
// %s string
// %d numero
// %j json
console.log("Un %s y un %s", "Perrito", "Gatito");
console.info("Hello world"); //Alias del log
console.warn("Hello world"); //Alias del log

console.assert(42 == "42");
console.assert(42 === "42");

console.trace("Hello");

const debuglog = util.debuglog("foo");

debuglog("Hello from foo");
