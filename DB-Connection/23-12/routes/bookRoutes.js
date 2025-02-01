const express = require ("express");
const router = express.Router();
const {getallbooks, getBookByID} = require ("../controllers/bookcontroller");
router.get("/getall", getallbooks);
router.get("/getbyid/:id",getBookByID);
module.exports = router