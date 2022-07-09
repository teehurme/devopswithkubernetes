import React, { useEffect, useState }from 'react';
import axios from 'axios';
import './App.css';

async function getTodos(){
  const result = await axios.get('/todos/')
  return result.data;
}

function App() {

  const [inputState, setInput] = useState('');
  const [todos, setTodos] = useState<{id:string, todo:string}[]>([])
  useEffect(()=>{
    getTodos()
      .then((todos)=>setTodos(todos))
  },[])

  const submit=async (event:React.FormEvent)=>{
    event.preventDefault();
    if(inputState.length>140) return
    await axios.post('http://localhost/todos/', { todo: inputState });
    getTodos()
      .then((todos)=>setTodos(todos))
  }
  return (
   <div>
     <h1>Todo</h1>
     <img src="http://localhost/images/daily.jpg" alt="daily image"/>
     <form onSubmit={submit}>
       <input
        type="text"
        value={inputState}
        onChange={(event:any)=>{
          setInput(event.target.value)
        }}/>
       <input type="submit" value="Create Todo"/>
     </form>
     <ul>
       {todos.map(({id,todo})=><li key={id}>{todo}</li>)}
     </ul>
   </div>
  );
}

export default App;
