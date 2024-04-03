require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/user.routes.js");
const signupRoute = require("./routes/signup.routes.js");
const petRoute = require("./routes/pet.routes.js");
const bodyParser = require('body-parser');
const app = express();


const MONGODB_URI = process.env.MONGODB_URI;
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// Routes
app.use("/api/users", userRoute);
app.use("/api/pets", petRoute);
app.use("/api/signups", signupRoute);

app.get("/", (req, res) => {
  res.send("hello from node api");
});

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("database connected");
    app.listen(3000, () => {
      console.log("App listening on port 3000");
    });
  })
  .catch((err) => {
    console.log("Connection failed!", err);
  });

