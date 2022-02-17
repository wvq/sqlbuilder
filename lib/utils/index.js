const _ = require('lodash')
const { escape: _escape, escapeId: _escapeId } = require('sqlstring')

const RAW_KEY = Symbol.for('__SQL_BUILDER_RAW__')

function isRaw(obj) {
  return obj?.[RAW_KEY] === true || typeof obj?.toSQLString === 'function'
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

function escape(sql) {
  if (isRaw(sql)) {
    return `${sql}`
  }

  return _escape(sql)
}

function escapeId(sql) {
  if (isRaw(sql)) {
    return `${sql}`
  }

  return _escapeId(sql)
}

exports = module.exports = {
  isRaw,
  raw,
  escape,
  escapeId,
}
