import express from 'express'

const PORT = process.env.PORT ?? '8000'
const app = express()

app.get('/',express.static('public'));

app.listen(PORT, ()=>{
    console.log(`Server started in port ${PORT}`)
})