import { CleanWebpackPlugin } from 'clean-webpack-plugin'

const config = {
  cleanOnceBeforeBuildPatterns: ['**/*', '!profile.json'],
}

export const cleanPlugin = new CleanWebpackPlugin(config)
