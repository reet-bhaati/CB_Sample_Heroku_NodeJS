const express = require('express')

const app = express()

const PORT = process.env.PORT || 4444

app.get('/', (req, res) => {
  console.log('new visitor')
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log('Server started')
})
