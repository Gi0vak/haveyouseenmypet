// const getTodos = (req, res) => {
//     res.send("I am the get todos route");
// };

const Todo = require("../model/Todo");

const getTodos = (req, res) => {
    // Todo.find((err, todos) => {
    //     if (err) {
    //         res.send(err);
    //     }
    //     res.json(todos);
    // });
    Todo.find()
        .then((todos) => {
            res.json(todos);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });

};
const createTodo = (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
    });
    todo.save()
        .then((todo) => {
            res.json(todo);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
    // todo.save((err, todo) => {
    //     if (err) {
    //         res.send(err);
    //     }
    //     res.json(todo);
    // });
};
const updateTodo = (req, res) => {
    Todo.findOneAndUpdate(
        { _id: req.params.todoID },
        {
            $set: {
                title: req.body.title,
                description: req.body.description,
                completed: req.body.completed,
            },
        },
        { new: true })
        .then((ingredient) => {
            res.json(ingredient);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};
// const updateTodo = async (req, res) => {
//     try {
//         const updatedTodo = await Todo.findOneAndUpdate(
//             { _id: req.params.todoID },
//             {
//                 $set: {
//                     title: req.body.title,
//                     description: req.body.description,
//                     completed: req.body.completed,
//                 },
//             },
//             { new: true }
//         );
//         res.json(updatedTodo);
//     } catch (err) {
//         res.status(500).send(err);
//     }
// };
const deleteTodo = (req, res) => {
    Todo.deleteOne({ _id: req.params.todoID })
        .then(() => res.json({ message: "Todo Deleted" }))
        .catch((err) => res.send(err));
};


module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
};
