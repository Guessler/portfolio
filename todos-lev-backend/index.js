require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT | 3000;
let todos = []

app.use(express.json());

app.get("/", (req, res) => {
  return res.json(todos);
});
app.post("/", (req,res) =>{
  const {name} = req.body;
  const id = todos.length
  todos.push({name, id}); 
  return res.json("todo added");
});
app.put("/:id", function (req, res) {
  const id = req.params.id;
  const { name } = req.body;

  let index = todos.findIndex((elem) => elem.id === Number(id));    
    todos[index].name = name;
    return res.json(todos[index]);

});
app.delete('/:id',function(req,res){
  const id = req.params.id
  let index = todos.findIndex(elem => elem.id===Number(id))
  return res.json(todos.splice(index,1))
});
app.listen(PORT, () => {
  console.log(`server started on ${PORT} port`);
});