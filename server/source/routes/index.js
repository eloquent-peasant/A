import { Router } from 'express'
import { router as root } from './root.js'

export const router = Router()

router.use(root)
