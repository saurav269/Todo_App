const TodoModel = require("../Model/TodoModel")


const getTodo = async(req,res)=>{
    try{
        const todo = await TodoModel.find()
        return res.status(200).send({
            success : true,
            message : "Geeing todo Successfully",
            todo,
        })

    }catch(err){
        console.log(err)
        return res.status(500).send({
            success : false,
            message : "Error in getting Todo",
            err
        })
    }
}

const createTodoController= async(req, res)=>{
    try{

        const {text} = req.body
        if (!text) {
            return res.status(400).send({ error: 'Text is required for a todo.' });
          }
          //Creating todo
          const newTodo = new TodoModel({text})
          await newTodo.save()
          return res.status(200).send({
            success : true,
            message : "New Todo Creating Successfully",
            newTodo,
          })

    }catch(err){
        console.log(err)
        return res.status(500).send({
            success : false,
            message : "Error in Create Todo API",
            err
        })
    }

}

//Updating

const updateTodoController = async(req,res) => {
    try{
        const {id} = req.params;
        const {text} = req.body;

        if (!text) {
            return res.status(400).json({ error: 'Text is required for updating a todo.' });
          }

          //Updating
          const updateTodo = await TodoModel.findByIdAndUpdate(id, {text}, {new : true})

          if (!updateTodo) {
            return res.status(404).send({ error: 'Todo not found.' });
          }

          return res.status(201).send({
            success : true,
            message : "Updated Successfully",
            updateTodo
          })

    }catch(err){
        console.log(err)
        return res.status(500).send({
            success : false,
            message : "Error in Update API",
            err
        })
    }

}

//Deleting Controller
const deleteTodoController = async(req,res) => {
    try{
        const {id} = req.params;

        if (!id) {
            return res.status(400).json({ error: 'ID is required for deleting a todo.' });
          }

          //Deleting
          const deleteTodo = await TodoModel.findByIdAndDelete(id)

          if (!deleteTodo) {
            return res.status(404).send({ error: 'Todo not found.'});
          }

          return res.status(201).send({
            success : true,
            message : "Deleted Successfully",
          })

    }catch(err){
        console.log(err)
        return res.status(500).send({
            success : false,
            message : "Error in DELETE API",
            err
        })
    }

}
module.exports = {getTodo, createTodoController, updateTodoController, deleteTodoController}