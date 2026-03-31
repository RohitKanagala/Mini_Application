const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname));

const upload = multer({ dest: "uploads/" });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/submit", upload.single("profilePic"), (req, res) => {
  console.log("Form Data Received:");
  console.log(req.body);

  if (req.file) {
    console.log("Uploaded File:", req.file.originalname);
  }

  res.send("<h2>Form submitted successfully!</h2><a href='/'>Go Back</a>");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
