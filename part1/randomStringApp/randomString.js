import { randomUUID } from 'node:crypto'
const randomString = randomUUID()

setInterval(function(){
    const time= new Date()
    console.log(time.toISOString(),': ',randomString)
},5000);