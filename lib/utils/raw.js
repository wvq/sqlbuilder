const _ = require('lodash')
const { escape, escapeId, format } = require('sqlstring')

const RAW_KEY = Symbol.for('__SQL_BUILDER_RAW__')

function isRaw(obj) {
  return obj?.[RAW_KEY] === true
}

function raw(sql) {
  if (isRaw(sql)) {
    return sql
  }

  return Object.defineProperties(
    {},
    {
      [Symbol.toPrimitive]: {
        value: () => sql,
        enumerable: false,
        configurable: false,
      },

      [RAW_KEY]: {
        value: true,
        enumerable: false,
        configurable: false,
      },
    }
  )
}

exports = module.exports = {
  isRaw,
  raw,
}
