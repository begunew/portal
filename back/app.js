const express = require("express");
const session = require("express-session");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = process.env;
const PORT = dotenv.PORT;
const flash = require("connect-flash");
const passport = require("passport");

// Mongoose
mongoose
  .connect(dotenv.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use(express.json());
//Express Session Middleware
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
//Connect Flash
app.use(flash());

app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

app.listen(PORT, () => console.log("Listening at port: " + PORT));
module.exports = app;
