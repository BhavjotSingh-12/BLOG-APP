const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/User');
const PostRoute = require('./routes/Post');
const catRoute = require('./routes/Category');
const multer = require('multer');
const path = require("path")

dotenv.config();
app.use(express.json(JSON));

app.use("/images", express.static(path.join(__dirname, "/images")))

mongoose.connect(process.env.MONGO_URL,).then(console.log("Connected to Mongo")).catch(err => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", PostRoute);
app.use("/api/categories", catRoute);

// Deployment


const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/blog/build/")))

  // console.log(__dirname1)
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "blog", "build", "index.html"));
  })
}
else {
  app.get("/", (req, res) => {
    res.send("api running succesfully");
  })
}


const server = app.listen("4000", () => {
  console.log("Backend running")
});