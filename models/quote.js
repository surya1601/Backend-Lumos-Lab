const mongoose = require("mongoose");
const quoteSchema = new mongoose.Schema({
    author : {
        type : "string",
    },
    quote : {
        type : "string",
    }
})
const QuoteInfo = new mongoose.model("QuoteInfo",quoteSchema);
module.exports = QuoteInfo;
