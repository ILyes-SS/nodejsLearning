const express = require('express')

const app = express()

app.listen(8000)

app.set('view engine', 'ejs')
app.set('views', 'views')

app.get('/', (req, res)=>{
    res.render('index', {
        title: 'My website',
        message: "My message",
        people: ['ilyes', 'malti']
    })
})