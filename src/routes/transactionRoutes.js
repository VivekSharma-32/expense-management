const express = require("express");
const {
  addTransactions,
  getAllTransactions,
  editTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

// router object
const router = express.Router();

// routes
// add transaction POST method
router.post("/add-transaction", addTransactions);

// get All transaction GET method
router.post("/get-transaction", getAllTransactions);

// edit All transaction PUT method
router.put("/edit-transaction", editTransaction);

// delete  transaction DELETE method
router.post("/delete-transaction", deleteTransaction);

module.exports = router;
