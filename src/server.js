const express = require('express')

const { db } = require('./db/models')
const { usersRoute } = require('./routes/users')
const { postsRoute } = require('./routes/posts')
const {commentsRoute} = require("./routes/posts/comments")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', express.static(__dirname + '/public'))
//const PORT = process.env.PORT || 4444

app.use('/api/users', usersRoute)
app.use('/api/posts', postsRoute)
app.use('/api/comments', commentsRoute )

db.sync()
  .then(() => {
    app.listen(4444, () => {
      console.log(`started on http://localhost:4444`)
    })
  })
  .catch((err) => {
    console.error(new Error('Could not start database'))
    console.error(err)
  })
