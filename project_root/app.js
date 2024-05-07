require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/user.routes.js");
const signupRoute = require("./routes/signup.routes.js");
const petRoute = require("./routes/pet.routes.js");
const contactRoute = require("./routes/contact.routes.js");
const imageRoute = require("./routes/image.routes.js");
const adminRoute = require("./routes/admin.routes.js");
const uploadRouter = require('./routes/upload.routes');
const fileUpload = require('express-fileupload');
const applicationFormRoutes = require("./routes/applicationFormRoutes");

const bodyParser = require('body-parser');
const app = express();

// const authRoutes = require('./routes/authRoutes.js');

const cloudinary = require('cloudinary').v2;

// Configure Cloudinary with your credentials
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.static('public'));

app.use(fileUpload({ useTempFiles: true }));

// Middleware
app.use(express.json());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({extended: true}));

// Routes
app.use("/api/users", userRoute);
app.use("/api/pets", petRoute);
app.use("/api/signups", signupRoute);
app.use("/api/contacts", contactRoute);
app.use("/api/images", imageRoute);
app.use("/api/admin", adminRoute);
app.use('/api', uploadRouter);
// Use application form routes
app.use("/api/application-form", applicationFormRoutes);

// app.use("/api/auth", authRoutes);

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

