// importing modules
const express = require('express');
const request = require('request');
const app = express()

app.use(express.static('public'));
app.set('view engine', 'ejs')
// focusing on root directory

app.get('/', function(req, res) {
  // search api method giphy
  //http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5
  // http://api.giphy.com/v1/gifs/search?q=soccer&api_key=bClDpdztYdNCVxLgdB5heqgwY9eG5ODP&limit=5
  let apiKey = 'bClDpdztYdNCVxLgdB5heqgwY9eG5ODP';
  let q = 'soccer';
  let url = `http://api.giphy.com/v1/gifs/search?q=${q}&api_key=${apiKey}&limit=5`;

  request(url, function(err, response, body) {
    if (err) {
      // rendering page
      res.render('index', {
        gif: null,
        error: 'Error, please try again'
      });
      console.log('error:', error);
    } else {
      // json parsing
      let gif = JSON.parse(body)
      // dictionary data
      let data = gif.data
      // iterate over dictionary
      let url = []
      for (var i in data) {
        gif_url = data[i].images.original_still.url
        url.push(gif_url)
      }
      res.render('index', {
        gif: url,
        error: 'Error, please try again'
      });

    }
  });
})
// creating a server
app.listen(3000, function() {
  console.log('127.0.0.1:3000')
})
