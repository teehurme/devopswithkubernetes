import { randomUUID } from 'node:crypto'
import {writeFile } from 'fs'

const randomString = randomUUID()
const FILEPATH=process.env.FILEPATH ?? './files/sharedfile'

setInterval(function(){
    const time= new Date()
    console.log(time.toISOString(),': ',randomString)
    writeFile(FILEPATH, `${time.toISOString()}: ${randomString}`,(err)=>{
        if(err) console.log(err)
    })

},5000);