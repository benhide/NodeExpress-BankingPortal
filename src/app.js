const path = require("path");
const express = require("express");
const accountRoutes = require("./routes/accounts");
const servicesRoutes = require("./routes/services");

const app = express();

const { accounts, users, writeJSON } = require("./data");

// SETS AND USE *******************************************************
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.render("index", { title: "Account Summary", accounts });
});

app.use("/account", accountRoutes);
app.use("/services", servicesRoutes);

app.get("/profile", (request, response) => {
  response.render("profile", { user: users[0] });
});

// LISTNER **********************************************************
app.listen(3000, () => {
  console.log("PS Project Running on port 3000!");
});
