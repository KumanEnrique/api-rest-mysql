
const express = require('express')
const path = require('path')
const morgan = require('morgan')
const mysql = require('mysql')
const myConnection = require('express-myconnection')

const app = express()

//settings
app.set('port',process.env.PORT || 3000)

//middlewares
app.use(morgan('dev'))
// app.use(myConnection(mysql,{
//     host:'localhost',
//     user:'root',
//     password: '',
//     port:3306,
//     database:'crudnodejsmysql'
// }))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//routes
require('./routes/api')(app);

//starting the server 
app.listen(app.get('port'), ()=>{
    console.log(`server on http://localhost:${app.get('port')}`)
})