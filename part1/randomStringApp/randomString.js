import { randomUUID } from 'node:crypto'
import express from 'express'


const randomString = randomUUID()
const app = express();
const PORT = process.env.PORT ?? '8000'

app.get('/',(req,res)=>{
    const time= new Date()
    res.send(`${time.toISOString()}: ${randomString}`);
})
setInterval(function(){
    const time= new Date()
    console.log(time.toISOString(),': ',randomString)
},5000);

app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`)
})