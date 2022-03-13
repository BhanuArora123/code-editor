const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const pyCompiler = (codeId) => {
    return new Promise((resolve, reject) => {
        let output;
        var codeOutputFile = fs.createWriteStream(path.join(__dirname, "..", "codeFiles", `codeOutputpy${codeId}.txt`),{})
        const filePath = path.join(__dirname,"..","codeFiles",`file${codeId}.py`);
        let pythonScript = spawn("python", [ filePath ]);
        pythonScript.stdout.on("data", (data) => {
            let dataReq = data.toString();
            output = dataReq;
            console.log(dataReq);
        })
        codeOutputFile.on("open", () => {
            pythonScript.stdout.pipe(codeOutputFile);
        })
        codeOutputFile.on("error", (err) => {
            if(err){
                console.log(err);
                reject(err);
            }
        })
        codeOutputFile.on("finish", () => {
            console.log("stream closed successfully");
            resolve(output);
        })
        pythonScript.on("error",(err) => {
            console.log(err);
        })
        pythonScript.on("close", (code) => {
            console.log("child process closed successfully with code = " + code);
        })
    })
}
const jsCompiler = (codeId) => {
    return new Promise((resolve, reject) => {
        let output;
        var codeOutputFile = fs.createWriteStream(path.join(__dirname, "..", "codeFiles", `codeOutputjs${codeId}.txt`),{})
        const filePath = path.join(__dirname,"..","codeFiles",`file${codeId}.js`);
        let pythonScript = spawn("node", [ filePath ]);
        pythonScript.stdout.on("data", (data) => {
            let dataReq = data.toString();
            output = dataReq;
            console.log(dataReq);
        })
        codeOutputFile.on("open", () => {
            pythonScript.stdout.pipe(codeOutputFile);
        })
        codeOutputFile.on("error", (err) => {
            if(err){
                console.log(err);
                reject(err);
            }
        })
        codeOutputFile.on("finish", () => {
            console.log("stream closed successfully");
            resolve(output);
        })
        pythonScript.on("error",(err) => {
            console.log(err);
        })
        pythonScript.on("close", (code) => {
            console.log("child process closed successfully with code = " + code);
        })
    })
}
module.exports = {
    pyCompiler,
    jsCompiler
}