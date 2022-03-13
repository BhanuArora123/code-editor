const express = require("express");
// const mongoose = require("mongoose");
// const { uploadCode } = require("./controllers/code");
const {connectToDB, sequelize} = require("./utils/dbCon");
const codeRouter = require("./routes/code");
const cors = require("cors");
// const ev = require("./utils/evalCode");
const app = express();

app.use(cors({
    origin : "*"
}))
app.use(express.json());
// evaluateCode("","js");

app.use(codeRouter);

connectToDB().then(res => {
    console.log(res);
    app.listen(8080);
    return sequelize.sync();
})
.catch((err) => {
    console.log(err);
})