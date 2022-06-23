const express = require('express');
const app = express();

const port = 4000;

app.use(express.static(__dirname + '/public'))


app.get('/', (req, res) => {
    // res.send('<h3>GET request to the homepage</h3>')
    // console.log(__dirname)
    res.sendFile(__dirname + '/views/home.html')
  })

  app.get('/about', (req, res) => {
    // res.send('<h3>GET request to the homepage</h3>')
    // console.log(__dirname)
    res.sendFile(__dirname + '/views/about.html')
  })


  app.get('/work', (req, res) => {
    // res.send('<h3>GET request to the homepage</h3>')
    // console.log(__dirname)
    res.sendFile(__dirname + '/views/work.html')
  })







app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})