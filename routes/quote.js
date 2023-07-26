const express = require("express");
const router = express.Router();
const QuoteInfo = require("../models/quotes");

router.get("/",async (req,res)=>{
    console.log("hello world");
    res.status(200).send(await QuoteInfo.find());
})

router.post("/",async (req,res)=>{
    const doc = new QuoteInfo({
        author : req.body.author,
        quote : req.body.quote
    })
    newQuote=await doc.save();
    res.status(200).json(newQuote);
    console.log('newQuote:', newQuote);
})

module.exports = router;
