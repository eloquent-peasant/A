import { Router } from 'express'
import { client } from '../config/client.js'

export const router = Router()

const handleRequest = async (client) => {
  const [meta, header] = await Promise.all([
    client.getSingle('meta'),
    client.getSingle('header'),
  ])
  return {
    meta,
    header,
  }
}

router.get('/', async (req, res) => {
  const defaults = await handleRequest(client)
  console.log(defaults)
  res.render('pages/home', {
    ...defaults,
  })
})
