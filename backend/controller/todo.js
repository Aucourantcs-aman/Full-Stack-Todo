const createTodo = async (req, res) => {
  console.log("todo created");
};
const updateTodo = async (req, res) => {
  console.log("todo upated");
};
const deleteTodo = async (req, res) => {
  console.log("todo deleted");
};
const getTodo = async (req, res) => {
    console.log("get created");
  };
export { createTodo, updateTodo, deleteTodo, getTodo };
