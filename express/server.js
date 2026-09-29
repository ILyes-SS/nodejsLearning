const express= require('express')
const posts = require('./routes/posts')
const logger = require('./middleware/logger')
const errorHandler = require('./middleware/error')
const notFound = require('./middleware/notFound')

const app = express()

app.listen(8000, ()=> console.log("coonnected to port 8000"))

// app.get('/', (req, res)=>{

//     res.send('<h1>Hello World</h1>') // you do not have to specify the content type
    
// })
// app.get('/about', (req, res)=>{
    // res.sendFile(path.join(__dirname, "public", 'about.html')) 
//     res.send('<h1>Hello about</h1>') 
    
// })


//middlewares to be able to send data in a post request
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(logger)

app.use('/api/posts', posts)

// not found runs only after no route matched
app.use(notFound)

app.use(errorHandler)


//static server . we setup a static folder so we dont have to create a route for serving every html file
// app.use(express.static(path.join(__dirname, "public")))
