import axios from 'axios'
import { createWriteStream } from 'fs';
import { stat } from 'fs/promises'

const FILEPATH=process.env.FILEPATH ?? './public/images/daily.jpg'

async function fetchTodaysImage()   { 
    const date = (await stat(FILEPATH).catch(()=>{}))?.birthtime
    const currentDate = (new Date()).toDateString()
    const imageDate = (new Date(date)).toDateString()

    const isTodaysImage = currentDate === imageDate;
    return new Promise((resolve,reject)=>{
    if(!isTodaysImage) {
        axios({
            method: "get",
            url: "https://picsum.photos/1200",
            responseType: "stream"
            }).then(function (response) {
                console.log(`${currentDate} fetching todays image`)
                const file = createWriteStream(FILEPATH)
                file.on('close',resolve)
                file.on('error', reject)
                response.data.pipe(file);
            })
    } else{
        resolve()
    }
    })
}
export { fetchTodaysImage }