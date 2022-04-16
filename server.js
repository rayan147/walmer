import express from 'express';

const app = express()
const PORT = 5000

// set route "/"
app.get('/',(req,res) => {
  res.json({
      greeting: "Hello World ! "
  })
})

// set route /costco
// return   always!

app.get('/costco',(req,res)=>{
   res.json({
      warehouse:" always"
   })
})
app.get('/costco2',(req,res)=>{
  res.json({
     warehouse:" always 2"
  })
})
app.get('/billing',(req,res)=>{
  res.json({
     owed:"You owe $100"
  })
})
// set server to listen on PORT 5000
app.listen(PORT,()=> console.log(`Webserver is listening on port ${PORT}`))

