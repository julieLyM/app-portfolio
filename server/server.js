const express = require("express");
const app = express();
const imageRoute = require("./routes/imageRoute");

// app.use("/myPhotos", express.static("./images"));
app.use("/api/v1/files", imageRoute);

app.get("/", (req, res) => {
  res.send("home server");
});

app.listen(process.env.PORT || 4545, console.log(`j'ecoute le port 4545`));
