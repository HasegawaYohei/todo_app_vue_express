const express = require('express');
const router = express.Router();
const model = require('../models');

router.get('/', (req, res, next) => {
  (async () => {
    const todos = await model.todo.findAll({
      order: [
        ['created_at']
      ]
    });

    res.json(todos);
  })();
});

router.post('/create', (req, res, next) => {
  (async () => {
    const todoName = req.body.name;
    const todo = await model.todo.findOrCreate({
      where: {
        name: todoName,
        done: false
      }
    });

    res.json(todo);
  })();
});

router.patch('/update', (req, res, next) => {
  (async () => {
    console.dir(req.body);
    const todo = await model.todo.update(
      {
        name: req.body.name,
        done: req.body.done
      },
      {
        where: {
          id: req.body.id
        }
      }
    );

    res.json(todo);
  })();
});

module.exports = router;