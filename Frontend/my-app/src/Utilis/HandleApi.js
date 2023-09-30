import axios from 'axios'

const baseUrl ='http://localhost:8200'

const getTodo= async(setTodo)=>{

    try{
        const res = await axios.get(baseUrl)
        const data = res.data
        console.log(data.todo)
        setTodo(data.todo)
    }catch(err){
        console.log(err)
    }
}
const addTodo= async(text, setText, setTodo)=>{

    try{
        const res = await axios.post('http://localhost:8200/create',{text})
        const data = res.data
        console.log(data.newTodo)
        setText("")
        getTodo(setTodo)
    }catch(err){
        console.log(err)
    }
}

const updateTodo= async(todoId,text, setText, setTodo, setIsUpdating)=>{

    try{
        const res = await axios.post(`http://localhost:8200/todos/${todoId}`,{id : todoId,text})
        const data = res.data
        console.log(data.updateTodo)
        setText("")
        setIsUpdating(false)
        getTodo(setTodo)
    }catch(err){
        console.log(err)
    }
}

const deleteTodo= async(todoId,setTodo)=>{

    try{
        const res = await axios.delete(`http://localhost:8200/todos/${todoId}`,{id : todoId})
        const data = res.data
        console.log(data)
        getTodo(setTodo)
    }catch(err){
        console.log(err)
    }
}

export {getTodo, addTodo, updateTodo, deleteTodo}


