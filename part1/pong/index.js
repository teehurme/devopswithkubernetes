import express from 'express'
const PORT = process.env.PORT ?? 8000
let count = 0

const app = express();

app.get('/pingpong',(req,res)=>{
    res.send(`PONG ${count}`)
    count = count + 1
})

app.listen(PORT,()=>{
    console.log(`Pong server listening on port ${PORT}`)
})
