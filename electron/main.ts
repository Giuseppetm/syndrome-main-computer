import fs from 'fs'
import path from 'path'
import http from 'http'
import { fileURLToPath } from 'url'
import { app, BrowserWindow } from 'electron'
import next from 'next'

const __filename = fileURLToPath(import.meta.url)

const safeLog = (msg: string) => {
  try {
    const userData = app && typeof app.getPath === 'function' ? app.getPath('userData') : null
    if (userData) {
      const logPath = path.join(userData, 'desktop-debug.log')
      fs.appendFileSync(logPath, `[${new Date().toISOString()}] ${msg}\n`, { encoding: 'utf8' })
    }
  } catch (e) {
    // ignore write errors
  }
  try { console.log(msg) } catch {}
}

// Resolve project dir
const __projectDir = (() => {
  try {
    // If app is packaged, resourcesPath points to resources (app.asar or app)
    if (app && app.isPackaged) {
      // process.resourcesPath gives path to resources (e.g. C:\...\resources)
      // app files are under resources/app or resources/app.asar.unpacked
      const resources = process.resourcesPath
      // possible locations to check
      const candidates = [
        path.join(resources, 'app'), // common when unpacked
        path.join(resources, 'app.asar.unpacked'), // unpacked ASAR
        path.join(resources, 'app.asar') // fallback (ASAR file)
      ]
      for (const c of candidates) {
        try {
          if (fs.existsSync(path.join(c, '.next')) || fs.existsSync(path.join(c, 'package.json'))) {
            return c
          }
        } catch {}
      }
      // fallback: resourcesPath (may still work if .next was unpacked at resources)
      return resources
    }

    // Not packaged: walk up from current file looking for .next or package.json
    let dir = path.dirname(__filename)
    for (let i = 0; i < 6; i++) {
      try {
        if (fs.existsSync(path.join(dir, '.next')) || fs.existsSync(path.join(dir, 'package.json'))) {
          return dir
        }
      } catch {}
      const parent = path.dirname(dir)
      if (parent === dir) break
      dir = parent
    }
    // fallback to repo root relative to file
    return path.resolve(path.dirname(__filename), '..')
  } catch (err) {
    try { console.error('Error resolving __projectDir', err) } catch {}
    return path.resolve('.')
  }
})()

safeLog(`Resolved __projectDir=${__projectDir}`)
safeLog(`process.resourcesPath=${process.resourcesPath}`)
safeLog(`app.isPackaged=${app && app.isPackaged}`)

// Determine dev mode: only true when explicitly in development
const dev = (process.env.ELECTRON_DEV === '1' || process.env.NODE_ENV === 'development') && !app.isPackaged

safeLog(`Running next in dev=${dev} NODE_ENV=${process.env.NODE_ENV}`)

const PORT = parseInt(process.env.PORT ?? '3000', 10)
let server: http.Server | null = null

async function startNext(): Promise<void> {
  // next expects the project root containing package.json and .next
  const dir = __projectDir
  safeLog(`Starting Next with dir=${dir}`)
  const nextApp = next({ dev, dir })
  await nextApp.prepare()
  const handle = nextApp.getRequestHandler()

  server = http.createServer((req, res) => handle(req, res))
  await new Promise<void>((resolve, reject) => {
    server!.listen(PORT, (err?: Error) => (err ? reject(err) : resolve()))
  })
  safeLog(`Next server listening on http://localhost:${PORT} (dev=${dev})`)
}

function createWindow(): void {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  })
  win.loadURL(`http://localhost:${PORT}`)
}

app.whenReady().then(async () => {
  try {
    await startNext()
    createWindow()
  } catch (err) {
    safeLog('Failed to start Next: ' + String(err))
    try {
      // Additional detailed log in userData
      const userData = app.getPath('userData')
      const logPath = path.join(userData, 'electron-error.log')
      fs.appendFileSync(logPath, `[${new Date().toISOString()}] Failed to start Next:\n${String(err)}\n\n`, { encoding: 'utf8', flag: 'a' })
    } catch (logErr) {
      safeLog('Failed to write error log: ' + String(logErr))
    }
    try { app.quit() } catch {}
  }
})

app.on('window-all-closed', () => {
  if (server) {
    server.close()
    server = null
  }
  if (process.platform !== 'darwin') app.quit()
})

app.on('before-quit', () => {
  if (server) {
    server.close()
    server = null
  }
})

process.on('SIGINT', () => {
  if (server) server.close()
  try { app.quit() } catch {}
})
