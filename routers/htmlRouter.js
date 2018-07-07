const express = require('express');
const router = new express.Router();
router.get('/', (req, res)=>{
  res.render('index');
})
router.get('/mine', (req, res)=>{
  res.render('mine');
})
module.exports = router;