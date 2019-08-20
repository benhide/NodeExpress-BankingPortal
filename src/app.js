const path = require("path");
const express = require("express");
const accountsRoutes = require("./routes/accounts");
const serviceRoutes = require("./routes/services");

const app = express();

const { accounts, users, writeJSON } = require("./data");

// SETS AND USE *******************************************************
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/account", accountsRoutes);
app.use("/service", serviceRoutes);

// LISTNER **********************************************************
app.listen(3000, () => {
  console.log("PS Project Running on port 3000!");
});
