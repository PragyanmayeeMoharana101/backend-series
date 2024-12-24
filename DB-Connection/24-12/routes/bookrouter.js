const express = require ("express");
const { getAllBooks, getBookById } = require("../controllers/bookController");

const router = express.Router();
router.get("/getAll",getAllBooks);
router.get("/findbook/:id",getBookById);

module.exports = router