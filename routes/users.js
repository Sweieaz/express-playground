const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('user list');
});

router.get('/new', (req, res) => {
  res.render('users/new', { firstName: 'Test' });
  res.redirect(`/users/${users.length - 1}`);
});

router.post('/', (req, res) => {
  const isValid = true;

  if (isValid) {
    users.push({ firstName: req.body.firstName });
  } else {
    console.log(Error);
    res.render('users/new', { firstName: req.body.firstName });
  }
});

router
  .route('/:id')
  .get((req, res) => {
    res.send(`get user with the id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`update user with the id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`delete user with the id ${req.params.id}`);
  });

const users = [{ name: 'Tijjan' }, { name: 'Sally' }];
router.param('id', (req, res, next, id) => {
  req.user = users[id];
  next();
});

module.exports = router;
