import express from 'express'
import { promises as fs } from  'fs';
import axios from 'axios'
const app = express();
const PORT = process.env.PORT ?? '8000'
const FILEPATH=process.env.FILEPATH ?? './files/sharedfile'
const MESSAGE = process.env.MESSAGE ?? 'no message'


app.get('/',async (req,res)=>{
    const data = (await fs.readFile(FILEPATH)).toString()
   // const pongsData = (await fs.readFile(PONGFILEPATH).catch((err)=>console.log(err)))
    const result = await axios.get('http://pong-svc:1234/count');
    res.send(`${MESSAGE}</br>${data}</br>PING / PONGS: ${result.data}`);
});
app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`)
})