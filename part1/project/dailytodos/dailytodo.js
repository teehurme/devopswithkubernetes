import axios from 'axios';

const TODO_BACKEND=process.env.TODO_BACKEND
axios.get('https://en.wikipedia.org/wiki/Special:Random').then(result=>{
     const todo = result.request.res.responseUrl
     axios.post(TODO_BACKEND,{ todo })
});