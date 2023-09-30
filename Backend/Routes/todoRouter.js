
 const {Router} = require("express")
const { getTodo, createTodoController, updateTodoController, deleteTodoController } = require("../Controllers/todoController")

 const router = Router()

 //GETTING
 router.get("/", getTodo)

 //CREATING TODO ROUTER
 router.post('/create', createTodoController)

 //UPDATING TODO ROUTER
 router.post('/todos/:id', updateTodoController)

 //DELETING TODO ROUTER
 router.delete('/todos/:id', deleteTodoController)
 

 module.exports = router