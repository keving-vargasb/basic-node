const util = require("util");

const helloPluto = util.deprecate(() => {
  console.log("Jello pluto");
}, "pluto is deprecate. it us not a planet anymore");
