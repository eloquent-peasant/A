import * as prismicHelpers from '@prismicio/helpers'
import { HandleLinkResolver } from '../helpers/linkResolver.js'

export const inject = (req, res, next) => {
  res.locals.Link = HandleLinkResolver
  res.locals.ctx = {
    prismicHelpers,
  }
  next()
}
