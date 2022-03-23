const express = require('express');
const app = express()
 

const FS = require('./lib/lib1')
let markets = new FS('./modul/markets.json')


app.get('/markets', (req,res) => {
   res.send(JSON.stringify(markets.read()[1]))
})

// app.get('/markets/:id' , (req,res) => {
   

//    res
// })



app.listen(5005,() => {
   console.log('Server is ready at 5000 PORT ')
})