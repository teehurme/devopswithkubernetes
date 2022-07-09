import express from 'express'
import { randomUUID } from 'node:crypto'
import { Sequelize, QueryTypes, Model, DataTypes} from 'sequelize'
const DATABASE_URL = process.env.DATABASE_URL ?? 'postgres://postgres:password@localhost:5432'
const sequelize = new Sequelize(DATABASE_URL, {
    dialectOptions: {
    },
});

class Todo extends Model {}
Todo.init(
    { 
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        todo: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    },{
        sequelize,
        underscored: true,
        timestamps: false,
        modelName: 'todo'
    })


const app = express();
app.use(express.json());
const PORT = process.env.PORT ?? '8000'

app.get('/todos', async (req, res)=>{
const todos = await Todo.findAll()
res.json(todos)
});

app.post('/todos', async (req,res)=> {
    try{
    if(req.body.todo.length>140){
        console.log('over 140 characters todos are not allowed')
        return res.sendStatus(405)
    }
    const r = await Todo.create({todo: req.body.todo});
    console.log('Todo added', r.toJSON())
    res.status(201).json(r)
    }catch(err){
        console.log(err)
    }
});
app.listen(PORT,()=>{
    console.log(`todo backend started on port ${PORT}`)
})