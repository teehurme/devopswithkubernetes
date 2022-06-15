import express from 'express'

const PORT = process.env.PORT ?? '8000'
const app = express()

app.get('/',(_req,res)=> {
    res.send(`Server started in port ${PORT}`)
})

app.listen(PORT, ()=>{
    console.log(`Server started in port ${PORT}`)
})