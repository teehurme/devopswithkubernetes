import express from 'express'
import { fetchTodaysImage } from './getImage.js'
const PORT = process.env.PORT ?? '8000'
const app = express()

app.use(async (req, res, next) => {
    await fetchTodaysImage()
    next()
  })
  
app.use(express.static('public'))

app.listen(PORT, ()=>{
    console.log(`Server started in port ${PORT}`)
})