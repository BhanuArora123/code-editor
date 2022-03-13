const { Sequelize } = require("sequelize");
const { rootPass } = require("../config");
// console.log(rootPass);
const seq = new Sequelize("codeEditor","root",rootPass + "#",{
    host: "localhost",
    dialect : "mysql"
})
const connectToDB = async () => {
    try {
        let res = await seq.authenticate();
        return res;
    } catch (error) {
        // console.log("cannot connect to db - "+error);
        return error;
    }
}
// const getSeqInstance = () => {
//     if(seq){
//         return seq;
//     }
//     throw new Error("not connected to database");
// }
module.exports = {
    connectToDB,
    sequelize:seq
};