import express from "express";
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { qrGenerated: false }); // Add this line
});

app.post("/", express.urlencoded({ extended: true }), (req, res) => {
  const url = req.body.URL;
  const qr_svg = qr.image(url);
  qr_svg.pipe(fs.createWriteStream("public/qr_img.png"));
  fs.writeFile("public/URL.txt", url, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
  res.render("index", { qrGenerated: true }); // Pass qrGenerated variable
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
