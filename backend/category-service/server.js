const { response } = require('express')
const cors = require('cors')
const express = require('express')

const app = express()

app.use(cors('*'))
app.use(express.json())


//add the routers:
const routeCategory = require('./routes/category')


app.use('/category' , routeCategory)

app.listen(4000,  '0.0.0.0' , (requst , response)=>
{
    console.log("Category-server started on port 4000")
})