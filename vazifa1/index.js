const express = require('express')
const app = express()
const port = 5000


app.use(express.json())

const logReq = (req,res,next) => {
   console.log(req);
   next()
}

app.use(logReq)

app.get('/',(req,res) => {
   res.send('ok')
})


/* post methods */


app.post('/new',(req,res)=> {
   res.send('ok')
})

app.get('*',(req,res)=> {
   res.sendStatus(404)
})

app.listen(port,console.log(`Server is Ready at ${port} port`))


