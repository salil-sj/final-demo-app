const { response } = require('express')
const cors = require('cors')
const express = require('express')

const app = express()

app.use(cors('*'))
app.use(express.json())


//add the routers:
const routerProduct = require('./routes/products')


app.use('/product' , routerProduct)

app.listen(4000 ,  '0.0.0.0' , (requst , response)=>
{
    console.log("product-server started on port 4000")
})

