import express from 'express'

const app = express()
const PORT = 9898

app.set('view engine', 'ejs')

app.use((req, _, next) => {
    console.log('neuer Request:', req.method, req.url)
    next()
})

app.use(express.static('./assets'))

app.get('/', (_, res)=>{
    res.render('index')
})

app.get('/about', (_, res)=>{
    res.render('about')
})

app.get('/works', (_, res)=>{
    res.render('works')
})

app.get('/gallery', (_, res)=>{
    res.render('gallery')
}) 

app.get('/:name', (_, res)=>{
    res.render('index')
})

app.listen(PORT, () => console.log('Runs'))