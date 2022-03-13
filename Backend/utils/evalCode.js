const codeModel = require("../models/code");
const { pyCompiler, jsCompiler } = require("./Compilers")

const evaluateCode = async (language,codeId) => {
    let codeInstance = await codeModel.findByPk(codeId);
    if(language === "py"){
        let output = await pyCompiler(codeId);
        codeInstance.set({
            codeOutput : output
        })
        await codeInstance.save();
    }
    else if(language == "js"){
        let output = await jsCompiler(codeId);
        codeInstance.set({
            codeOutput : output
        })
        await codeInstance.save();
    }
}
module.exports = {
    evaluateCode
}