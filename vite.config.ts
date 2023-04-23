import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import * as path from 'path'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig(({ command }) => {
  const isBuild = command === 'build'
  const plugins = [react()]
  if (isBuild) {
    plugins.push(legacy())
  }
  return {
    plugins,
    build: {},
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  }
})
