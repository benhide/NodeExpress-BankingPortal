const express = require("express");

const router = express.Router();

const { accounts, writeJSON } = require("../data");

// ROUTES ************************************************************
router.get("/", (request, response) => {
  response.render("index", { title: "Account Summary", accounts });
});

router.get("/profile", (request, response) => {
  response.render("profile", { user: users[0] });
});

// TRANSFER ROUTES **************************************************
router.get("/transfer", (request, response) => {
  response.render("transfer");
});

router.post("/transfer", (request, response) => {
  accounts[request.body.from].balance =
    accounts[request.body.from].balance - request.body.amount;

  accounts[request.body.to].balance =
    parseInt(accounts[request.body.to].balance) +
    parseInt(request.body.amount, 10);

  writeJSON();

  response.render("transfer", { message: "Transfer Completed" });
});

// PAYMENTS ROUTES *************************************************
router.get("/payment", (request, response) => {
  response.render("payment", { account: accounts.credit });
});

router.post("/payment", (request, response) => {
  accounts.credit.balance -= request.body.amount;
  accounts.credit.available += parseInt(request.body.amount, 10);

  writeJSON();

  response.render("payment", {
    message: "Payment Successful",
    account: accounts.credit
  });
});

module.exports = router;
