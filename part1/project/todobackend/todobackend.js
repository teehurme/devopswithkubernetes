import express from 'express'
import { randomUUID } from 'node:crypto'

const app = express();
app.use(express.json());
const PORT = process.env.PORT ?? '8000'
const todos = [];


app.get('/todos', async (req, res)=>{
    res.json(todos)
});

app.post('/todos', async (req,res)=> {
    todos.push({id: randomUUID(), todo: req.body.todo})
    res.status(201).json(todos)
});
app.listen(PORT,()=>{
    console.log(`todo backend started on port ${PORT}`)
})