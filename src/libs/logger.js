'use strict'

import log4js from 'log4js'
import path from 'path'
import config from '../config'

log4js.configure({
  appenders: {
    console: {
      type: 'console'
    },
    dateFile: {
      type: 'dateFile',
      filename: path.join(config.LOG_PATH, 'log.log'),
      pattern: 'yyyy-MM-dd-hh',
      compress: true
    }
  },
  categories: {
    default: {
      appenders: ['dateFile', 'console'],
      level: 'all'
    }
  }
})

// 日志调用
export const createLogger = (name) => {
  let logger = log4js.getLogger(name)
  return logger
}

// 配合 express 使用的方法
export const use = (app) => {
  app.use(log4js.connectLogger(log4js.getLogger('express'), {
    level: 'auto',
    format: ':method :url :status'
  }))
}
