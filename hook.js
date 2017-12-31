var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));




// POST method route
app.post('/', function (req, res) {
  console.log(req.body)

  res.send('POST request to the homepage')
})

app.listen(3001, () => console.log('Example app listening on port 3001!'))
