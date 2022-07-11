const express = require("express");
const app = express();
const port = 2000;

let ejs = require("ejs");
const sass = require("sass");

app.get("/", (req, res) => {
  res.render("homepage");
});

app.get("/homepage", (req, res) => {
  res.render("homepage");
});

app.get("/jobfilter", (req, res) => {
  res.render("jobfilter");
});

app.get("/jobs", (req, res) => {
  res.render("jobgallery");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/apply", (req, res) => {
  res.render("jobapply");
});

app.get("/succes", (req, res) => {
  res.render("applysucced");
});
app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`App is working on port.... ${port}`);
});
