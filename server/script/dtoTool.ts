import * as fs from 'fs'
import * as path from 'path'
import * as md5 from 'md5'
var preveMd5: string = '' 
var timer: NodeJS.Timeout | undefined = undefined
// /Users/angle/Documents/code/react/react-blog/server/script
const watchFileDir: string = '../app/dto'
const outFileDir: string = '../../blog/src'

const watchFilePath: string = path.resolve(__dirname, watchFileDir)
const outFilePath: string = path.resolve(__dirname, outFileDir)

async function isDir (path: fs.PathLike): Promise<boolean> {
  return (await fs.promises.stat(path)).isDirectory()
}

async function isExitPath (path: fs.PathLike): Promise<boolean> {
  let res: boolean = false
  try {
    await fs.promises.access(path)
    res = true
  } catch {
    res = false
  }
  return res
}

async function isFile (path: fs.PathLike): Promise<boolean> {
  return (await fs.promises.stat(path)).isFile()
}

async function copy (src: string, dest: string): Promise<void> {
  if (await isDir(src)) {
    let dist: string = path.join(dest, path.basename(src))
    if (!await isExitPath(dist)) {
      fs.promises.mkdir(dist)
    }
    let paths: string[] = await fs.promises.readdir(src)
    await Promise.all(paths.map(item => copy(path.join(src, item), dist)))
  } else if (isFile(src)) {
    await fs.promises.copyFile(src, path.join(dest, path.basename(src)))
  }
}

async function deleteAllFile (src: string): Promise<void> {
  if (await isDir(src)) {
    let paths: string[] = await fs.promises.readdir(src)
    await Promise.all(paths.map(item => deleteAllFile(path.join(src, item))))
    await fs.promises.rmdir(src)
  } else if (isFile(src)) {
    await fs.promises.unlink(src)
  }
}
async function updateDir(src: string, dest: string): Promise<void> {
  let dist:string = path.join(dest, path.basename(src))
  await deleteAllFile(dist)
  await copy(src, dest)
}

updateDir(watchFilePath, outFilePath)

fs.watch(watchFilePath, {
  recursive: true
},(event, filename) => {
  if (timer) {
    clearTimeout(timer)
  }
  timer = setTimeout(async () => {
    if (event === 'change') {
      let currMd5:string = md5(await fs.promises.readFile(path.resolve(watchFilePath, filename)))
      if (currMd5 !== preveMd5) {
        updateDir(watchFilePath, outFilePath)
        preveMd5 = currMd5
      }
    } else {
      updateDir(watchFilePath, outFilePath)
    }
    timer = undefined
  }, 300)
  
})
console.log('文件监控启动!')
