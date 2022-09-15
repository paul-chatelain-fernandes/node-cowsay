const obj = require("./information.js");
const cowsay = require("cowsay");
const str = `${obj.name} est un wilder du campus d'${obj.campus}`;
console.log(
  cowsay.say({
    text: str,
  })
);
