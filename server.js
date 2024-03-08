const express = require('express');
const app = express();

//app.get(logger)  for all
//router.use(logger) for router only
app.set('view engine', 'ejs');

app.get('/', logger, (req, res) => {
  //middleware for indivifual
  // res.render('index', { text: 'again' }); adding the word again to the index.ejs
  ////some other method
  // res.send('Hi');
  // res.sendStatus(500) will get in the console an error
  //res.status(500).send("hi") will get the message hi and still the error from the 500
  //res.json({message: "Error"}) will get the json message
  //res.download("server.js") to download the file
});

const userRouter = require('./routes/users');
app.use('/users', userRouter);
//can also use for other methods

// middleware request
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(3000);
