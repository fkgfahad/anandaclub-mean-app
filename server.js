const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const cookieParser = require("cookie-parser");

const app = express();

const DB_URI = "string";
mongoose.connect(DB_URI, { useNewUrlParser: true }, (error) => {
  if (error) {
    console.log("Connection error.");
  } else {
    console.log("Connected to DB.");
  }
});

app.use(
  session({
    secret: "secret",
    name: "string",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000000000,
      httpOnly: true,
      secure: false,
    },
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Cloudinary
const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: "string",
  api_key: "string",
  api_secret: "string",
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Passport initialize
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const User = require("./server/models/user");
passport.use(
  "local",
  new LocalStrategy(
    { usernameField: "username", passwordField: "password" },
    (username, password, done) => {
      User.fineOne({ username: username }, (error, user) => {
        if (error) {
          done(error);
        } else if (!user) {
          done(null, false, { message: "Invalid username" });
        } else if (!bcrypt.compareSync(password, user.password)) {
          done(null, false, { message: "Incorrect password" });
        } else {
          done(null, user);
        }
      });
    }
  )
);
passport.serializeUser((user, done) => done(null, user._id));
passport.deserializeUser((id, done) => {
  User.fineById(id, (error, user) => done(error, user));
});

// Routes initialize
const homeCtrl = require("./server/routes/home"),
  loginCtrl = require("./server/routes/login"),
  logoutCtrl = require("./server/routes/logout"),
  profileCtrl = require("./server/routes/profile"),
  postsCtrl = require("./server/routes/posts"),
  postCtrl = require("./server/routes/post"),
  messageCtrl = require("./server/routes/message"),
  memberCtrl = require("./server/routes/member"),
  noticeCtrl = require("./server/routes/notice"),
  adminCtrl = require("./server/routes/admin"),
  helpCtrl = require("./server/routes/help");

app.use("/", homeCtrl);
app.use("/b/login", loginCtrl);
app.use("/logout", logoutCtrl);
app.use("/profile", profileCtrl);
app.use("/posts", postsCtrl);
app.use("/post", postCtrl);
app.use("/message", messageCtrl);
app.use("/member", memberCtrl), app.use("/notice", noticeCtrl);
app.use("/admin", adminCtrl);
app.use("/help", helpCtrl);

app.post("/api", (req, res) => {
  let data = {
    key: req.body.key,
    user: req.body.user,
    message: "Success!",
    status: "ko",
  };
  res.status(200).json(data);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

const port = process.env.PORT || 3000;
app.set("port", port);

app.listen(port, (error) => {
  if (error) console.log(error);
  else console.log("App listening on port " + port);
});
