import { defineConfig } from 'vite'
import fs from 'node:fs'
import path from 'node:path'

function safePublicCopy() {
  return {
    name: 'safe-public-copy',
    apply: 'build',
    closeBundle() {
      const publicDir = path.resolve(__dirname, 'public')
      const outDir = path.resolve(__dirname, 'dist')
      const skip = ['logo-LN copy.png']
      function copyDir(src, dest) {
        fs.mkdirSync(dest, { recursive: true })
        for (const entry of fs.readdirSync(src)) {
          if (skip.includes(entry)) continue
          const srcPath = path.join(src, entry)
          const destPath = path.join(dest, entry)
          const stat = fs.statSync(srcPath)
          if (stat.isDirectory()) {
            copyDir(srcPath, destPath)
          } else {
            try { fs.copyFileSync(srcPath, destPath) } catch {}
          }
        }
      }
      copyDir(publicDir, outDir)
    }
  }
}

export default defineConfig(({ command }) => ({
  base: '/',
  publicDir: command === 'serve' ? 'public' : false,
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
  plugins: [safePublicCopy()]
}))
