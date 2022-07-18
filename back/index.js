const express = require('express')
const bodyParser = require('body-parser')
const { response } = require('express')
const app = express()
const port = 5000
const router = require('./router')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (req,res) => {
    res.json({info: 'api working'})
})

router(app)

app.listen(port, () =>{
    console.log(`running on port ${port}`)
})
