'use strict'

import { Router } from 'express'

const router = Router()
// Index
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Hi' })
})

export default router
