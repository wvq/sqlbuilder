// // module.exports = require('./lib/index')

const { escapeId } = require("sqlstring");

// // const { raw, isRaw } = require('./lib/utils/raw')

// let b = raw('select * from users')

// let c = raw(b)

// console.log(isRaw(b))
// console.log(isRaw(c))


let a = escapeId('`foo`')

console.log(a)