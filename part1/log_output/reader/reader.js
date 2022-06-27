import express from 'express'
import { promises as fs } from  'fs';
const app = express();
const PORT = process.env.PORT ?? '8000'
const FILEPATH=process.env.FILEPATH ?? './files/sharedfile'
const PONGFILEPATH=process.env.PONGFILEPATH ?? './files/pongs'



app.get('/',async (req,res)=>{
    const data = (await fs.readFile(FILEPATH)).toString()
    const pongsData = (await fs.readFile(PONGFILEPATH).catch((err)=>console.log(err)))
    const pongsCount = pongsData ? Number.parseInt(pongsData.toString(),10) : 0
    res.send(`${data}</br>PING / PONGS: ${pongsCount}`);
});
app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`)
})