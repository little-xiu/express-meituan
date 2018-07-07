const express = require("express");
const router = new express.Router();
const bodyParser = require("body-parser");
const fs = require("fs");
module.exports = router;
router.use("/",bodyParser());
router.post("/json/sellers.json",(req,res)=>{
	let result = fs.readFileSync("./public/json/sellers.json");
	res.json(JSON.parse(result));
})