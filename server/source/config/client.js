import path from 'path'
import fetch from 'node-fetch'
import { fileURLToPath } from 'url'
import * as dotenv from 'dotenv'
import * as prismic from '@prismicio/client'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.resolve(__dirname, './dev.env') })

const repoName = process.env.PRISMIC_REPO_NAME
const accessToken = process.env.PRISMIC_ACCESS_TOKEN

export const client = prismic.createClient(repoName, {
  fetch,
  accessToken,
})
