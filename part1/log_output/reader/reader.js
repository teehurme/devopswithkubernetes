import express from 'express'
import { promises as fs } from  'fs';
const app = express();
const PORT = process.env.PORT ?? '8000'
const FILEPATH=process.env.FILEPATH ?? './files/sharedfile'

app.get('/',async (req,res)=>{
    const data = (await fs.readFile(FILEPATH)).toString()
    res.send(data);
});
app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`)
})