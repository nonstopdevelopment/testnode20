const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Tampa.dev from a really old node 20.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
