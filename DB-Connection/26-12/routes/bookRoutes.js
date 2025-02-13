const express = require ("express");
const router = express.Router();
const {getallbooks, getBookByID,getBookByChoice, addbook} = require ("../controllers/bookcontroller");
router.get("/getall", getallbooks);
router.get("/getbyid/:id",getBookByID);
router.get("/getidbychoice/:id",getBookByChoice);
router.get("/addbook",addbook);
module.exports = router