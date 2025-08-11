import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function ToDo(){
    let[todos, setTodos]=useState([{task: "sample-task",id:uuidv4(),isDone:false}]);
    let[newTodo,setNewTodo]=useState("");

    let addNewTask=()=>{
        setTodos((prevTodos)=>{
           return [...prevTodos,{task:newTodo , id:uuidv4(),isDone:false}]
        });
        setNewTodo("");
    }
    let updateTodoValue =(event)=>{
        setNewTodo(event.target.value);
    }
    let deleteTodo=(id)=>{
       setTodos((prevTodos)=>todos.filter((prevTodos)=> prevTodos.id !=id));
         
    }
    let markAllAsDone =()=>{
        setTodos(
            todos.map((todo)=>{
           return{
             ...todo,
             isDone:true,
           };
        })
        );
        console.log(newArr);
    };
    let markAsDone=(id)=>{
        setTodos((prevTodos)=>
        prevTodos.map((todo)=>{
            if(todo.id==id){
                return{
                    ...todo,
                    isDone:true,
                }
            }else{
                
                    return todo;
            
            }
        })
        )
    }
    return(
        <div>
            <input placeholder="Add a Task" 
             value={newTodo}
             onChange={updateTodoValue}>

             </input>
              <br /><br />
            <button onClick={addNewTask}>Add Task</button>
            <br />
            <br />
            <br />
            <br />
            <h4>Tasks Todo</h4>
            <ul>
                { todos.map((todo)=>{
                       return <li key={todo.id}>
                        <span style={todo.isDone ?{textDecorationLine:"line-through"}:{ }}>{todo.task}</span> &nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={()=>deleteTodo(todo.id)}>delete</button>
                        <button onClick={()=>markAsDone(todo.id)}>Mark As Done</button>
                        </li> 
                    })
                }
            </ul> <br /><br /><br />
            <button onClick={markAllAsDone}>Mark All As Done</button>
            
        </div>
    )

}