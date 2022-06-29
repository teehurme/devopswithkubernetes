import express from 'express'
import { promises as fs } from  'fs';

const PORT = process.env.PORT ?? 8000
let count = 0
const FILEPATH=process.env.FILEPATH ?? './files/pongs'

const app = express();

app.get('/pingpong',async (req,res)=>{
    const data = (await fs.readFile(FILEPATH).catch((err)=>console.log(err)))
    const count =  data ? Number.parseInt(data,10) : 0
    await fs.writeFile(FILEPATH,`${count+1}`)
    res.send(`PING  / PONGS: ${count}`)
})

app.get('/count', async(req, res) => {
    const data = (await fs.readFile(FILEPATH).catch((err)=>console.log(err)))
    const count =  data ? Number.parseInt(data,10) : 0
    res.send(`${count}`)
})

app.listen(PORT,()=>{
    console.log(`Pong server listening on port ${PORT}`)
})
