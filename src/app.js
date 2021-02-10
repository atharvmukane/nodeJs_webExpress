const express = require('express')
const path = require('path')
const app = express()
const hbs = require('hbs')

const port = process.env.PORT || 8000

const veiw_Path = path.join(__dirname, '../templates/views')
const partials_Path = path.join(__dirname,'../templates/partials')
app.set('view engine', 'hbs')
app.set('views', veiw_Path)
hbs.registerPartials(partials_Path)

//path for css 
const static_path = path.join(__dirname, '../public')
app.use(express.static(static_path))

app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/about', (req, res)=>{
    res.render('about')
})

app.get('/weather', (req, res)=>{
    res.render('weather')
})

app.get('*', (req, res)=>{
    res.render('404')
})

app.listen(port, () => {
    console.log(`listening to port ${port}`)
})