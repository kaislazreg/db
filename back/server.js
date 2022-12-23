const express = require('express')
const cors = require ('cors')

const connectdb = require('./configue/connectdb')

const conRouter = require('./routes/contactr')
const app=express()
const port = 4005




//tawa rbatna server mta3na bl db
connectdb()
 
app.use(cors())

//tawa bch na3mlou fazet json li bch na3mlou beha lmsg mba3d f blaset .send
app.use(express.json())

//tawa bch njibou les routes mta3na ll server.js w na3mlou lpath l n7ebou 3lih bch ne5dmou 3lih mba3d f thunder
app.use('/api/usr',conRouter)




app.listen(port,err=>{
    console.log(err)?console.log(err):console.log(`connected on port ${port}`)
})
//zrjtui