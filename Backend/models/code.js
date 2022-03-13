const Seq = require("sequelize");
const {sequelize} = require("../utils/dbCon");

const codeModel = sequelize.define("code",{
    codeData : {
        type : Seq.STRING,
        defaultValue:""
    },
    language : {
        type : Seq.STRING,
        values:["js","cpp","c","php","java","py"]
    },
    codeOutput : {
        type : Seq.STRING,
        defaultValue : ""
    },
    codeId : {
        type : Seq.INTEGER,
        autoIncrement:true,
        primaryKey : true
    },
    codeErrors : {
        type : Seq.STRING,
        defaultValue : ""
    }
},{
    timestamps:true
})
module.exports = codeModel;