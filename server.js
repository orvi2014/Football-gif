// importing modules
const express = require('express')
const app = express()

app.use(express.static('public'));
app.set('view engine', 'ejs')

// focusing on root directory
app.get('/', function (req, res) {
  res.send('Hello World!')
})
// creating a server
app.listen(3000, function () {
  console.log('127.0.0.1:3000')
})
