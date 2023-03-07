const moment = require("moment");
const transactionModel = require("../models/transactionModel");

//get all transactions
const getAllTransactions = async (req, res) => {
  try {
    const { frequency, selectedDate, type } = req.body;
    const transactions = await transactionModel.find({
      ...(frequency !== "custom"
        ? {
            date: {
              $gt: moment().subtract(Number(frequency), "d").toDate(),
            },
          }
        : {
            date: {
              $gte: selectedDate[0],
              $lte: selectedDate[1],
            },
          }),
      userId: req.body.userId,
      ...(type !== "all" && { type }),
    });
    res.status(200).json(transactions);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//add new transaction
const addTransactions = async (req, res) => {
  try {
    const newTransaction = await transactionModel(req.body);
    await newTransaction.save();
    res.status(201).send("Transaction created");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// edit transaction
const editTransaction = async (req, res) => {
  try {
    await transactionModel.findOneAndUpdate(
      { _id: req.body.transactionId },
      req.body.payload
    );
    res.status(200).send("Edit successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// delete transaction
const deleteTransaction = async (req, res) => {
  try {
    await transactionModel.findOneAndDelete({ _id: req.body.transactionId });
    res.status(200).send("Transaction deleted");
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

module.exports = {
  getAllTransactions,
  addTransactions,
  editTransaction,
  deleteTransaction,
};
