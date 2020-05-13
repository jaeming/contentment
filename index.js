const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./src/db.json')
const db = low(adapter)

db.defaults({ posts: [], users: [] })
  .write()

const user = db.get('users')
  .push({ name: 'Benji Forrest', id: 1, GodMode: true })
  .write()

db.get('posts')
  .push({ id: 1, title: 'Benji is awesome', user: user.find(u => u.id === 1) })
  .write()
