import SVGSpritemapPlugin from 'svg-spritemap-webpack-plugin'
import { aliasEntries } from '../config/alias.js'

const config = `${aliasEntries.src}/svgs/*.svg`

export const svgSpritemapPlugin = new SVGSpritemapPlugin(config, {
  output: {
    filename: 'svgs/spritemap.svg',
  },
})
