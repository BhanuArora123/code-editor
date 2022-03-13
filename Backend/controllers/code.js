const codeModel = require("../models/code");
const fs = require("fs");
const path = require("path");
const { evaluateCode } = require("../utils/evalCode");
exports.uploadCode = async (req,res,next) => {
    let {codeData ,language } = req.body;

    const code = await codeModel.create({
        codeData,
        language
    });
    
    fs.writeFile(path.join(__dirname,"..","codeFiles",`file${code.codeId}.${language}`),codeData,{},(err) => {
        if(err){
            console.log(err);
            return;
        }
        evaluateCode(language,code.codeId)
    })
    return res.status(200).json({
        message : "successfully executed"
    })
}