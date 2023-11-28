const express = require('express')
const app = express()
require('dotenv').config()

// Herokuu dynamically sets a port
// eslint-disable-next-line
const PORT = 8080 || process.env.PORT

app.get('/health', (req, res) => {
  res.send('<br><p>ok</p><br>')
})

// change this string to ensure a new version deployed
app.get('/version', (req, res) => {
  res.send('<br><p>2</p><br>')
})


app.use('/', express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`server started on ${PORT}`)
})
