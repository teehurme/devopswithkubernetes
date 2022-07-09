import express from 'express'
import  { Sequelize, Model, DataTypes }  from 'sequelize'

const PORT = process.env.PORT ?? 8000


const app = express();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
    },
  });

class Pong extends Model {}
Pong.init({
    count: { type: DataTypes.INTEGER },
    },
    {
        sequelize,
        underscored: true,
        timestamps: false,
        modelName: 'pong'
    })

app.get('/pingpong',async (req,res)=>{
    const result = await Pong.findByPk(1);
    const count = result.count
    result.count=count +1
    result.save();
    res.send(`PING  / PONGS: ${count}`)
})

app.get('/count', async(req, res) => {
    const result = await Pong.findByPk(1);
    const count = result.count
    res.send(`${count}`)
})

app.listen(PORT,()=>{
    console.log(`Pong server listening on port ${PORT}`)
})
