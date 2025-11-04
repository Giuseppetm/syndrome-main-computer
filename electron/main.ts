import path from 'path'
import http from 'http'
import { fileURLToPath } from 'url'
import { app, BrowserWindow } from 'electron'
import next from 'next'

function ensureWindowsEnv(): void {
  if (process.platform !== 'win32') return
  const sysRoot = process.env.SystemRoot ?? 'C:\\Windows'
  process.env.SystemRoot = sysRoot
  process.env.ComSpec = process.env.ComSpec ?? path.join(sysRoot, 'System32', 'cmd.exe')
  if (!process.env.PATH?.toLowerCase().includes(path.join(sysRoot, 'System32').toLowerCase())) {
    process.env.PATH = `${path.join(sysRoot, 'System32')};${process.env.PATH ?? ''}`
  }
}

ensureWindowsEnv()

const __projectDir = (() => {
  try {
    const __filename = fileURLToPath(import.meta.url)
    return path.dirname(__filename)
  } catch {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (global as any).__dirname ?? path.resolve('.')
  }
})()

const PORT = parseInt(process.env.PORT ?? '3000', 10)
const dev = process.env.ELECTRON_DEV === '1' || process.env.NODE_ENV !== 'production'

let server: http.Server | null = null

async function startNext(): Promise<void> {
  const dir = path.join(__projectDir, '..')
  const nextApp = next({ dev, dir })
  await nextApp.prepare()
  const handle = nextApp.getRequestHandler()

  server = http.createServer((req, res) => handle(req, res))
  await new Promise<void>((resolve, reject) => {
    server!.listen(PORT, (err?: Error) => (err ? reject(err) : resolve()))
  })

  console.log(`Next server listening on http://localhost:${PORT} (dev=${dev})`)
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
    console.error('Failed to start Next:', err)
    try {
      const fs = await import('fs')
      const logPath = path.join(__projectDir, '..', 'electron-error.log')

      if ('writeFileSync' in fs) {
        fs.writeFileSync(logPath, `[${new Date().toISOString()}] Failed to start Next:\n${String(err)}\n\n`, { encoding: 'utf8', flag: 'a' })
      } else {
        console.error('FS module missing writeFileSync')
      }
    } catch (logErr) {
      console.error('Failed to write log file:', logErr)
    }

    app.quit()
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
  app.quit()
})
