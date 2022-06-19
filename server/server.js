const express = require('express')
const cors = require('cors');

const PORT = 8080
const HOST = '0.0.0.0'

const app = express()

app.use(cors());
app.get('/', (req, res) => {
  res.send({
    courses:["Toán","Lý","Hoá"]
  })
})

app.get('/data',(req,res) =>{
  res.send({
    data:["Toán","Lý","Hoá"]
  })
})

app.listen(PORT, HOST);
console.log(`Example app listening on host : ${HOST} port ${PORT}`)
