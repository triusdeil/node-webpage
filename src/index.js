const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')

//settings
app.set('port', 4000)
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

//routes
app.use(require('./routes/routes'))

//server
app.listen(app.get('port'),() =>{
    console.log(`server listening on port: ${app.get('port')}`)
})