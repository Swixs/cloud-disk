const fs = require('fs')
const File = require('../models/File')
const config = require('config')

class FileService {
  createDir(file) {
    const filePath = `${config.get('filePath')}\\${file.user}\\${file.path}`
    return new Promise((resolve, reject) => {
      try {
        if (!fs.existsSync(file)) {
          fs.mkdirSync(filePath)
          return resolve({ message: 'File was created' })
        } else {
          return reject({ message: 'File already exist' })
        }
      } catch (e) {
        return reject({ message: `File error 0` })
      }
    })
  }
}

module.exports = new FileService()
