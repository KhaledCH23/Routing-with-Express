const express = require('express')
const app = express()

app.use( getDateRequest = (req, res, next) => {
let d = new Date()
if (d.getHours() >=17 || d.getHours() <8){
    res.status(500).send('<center>Our office is not open now !!</center>') 
}
else{
    next()
}
})

app.use((err, req, res, next)=>{
    console.log('an error occured!!!')
  console.log(err)
})

app.use(express.static(__dirname + '/public'))

app.listen(3000,(err=>{
    if(err) console.log(err)
    else console.log('Server is running in port 3000')
}))
