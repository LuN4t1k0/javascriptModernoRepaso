const {frutas, dinero} = require('./frutas')
const cowsay = require("cowsay");

frutas.forEach( item => {
  console.log(item);
})

console.log(dinero);
console.log(cowsay.say({
  text : "I'm a moooodule",
  e : "oO",
  T : "U "
}));


