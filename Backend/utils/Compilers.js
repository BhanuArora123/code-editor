const { spawn, exec } = require("child_process");
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
const cppCompiler = (codeId,language) => {
    if(!language){
        language = "cpp";
    }
    return new Promise((resolve, reject) => {
        let output;
        const filePath = path.join(__dirname,"..","codeFiles",`file${codeId}.${language}`);
        const filePathExe = path.join(__dirname,"..",`a.exe`);
        let execCpp = exec(`${language === "cpp"?"g++":"gcc"} "${filePath}"`,(err,stdout,stderr) => {
            if(err){
                console.log(err);
            }
            if(stderr){
                console.log(stderr);
            }
            let pythonScript = spawn(`${filePathExe}`,{
                env:process.env
            });
            pythonScript.stdout.on("data", (data) => {
                let dataReq = data.toString();
                output = dataReq;
                console.log(dataReq);
            })
            pythonScript.stderr.on("data",(err) => {
                console.log(err.toString());
            })
            var codeOutputFile = fs.createWriteStream(path.join(__dirname, "..", "codeFiles", `codeOutput${language}${codeId}.txt`),{});
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
    })
}
const javaCompiler = (codeId) => {
    return new Promise((resolve, reject) => {
        let output;
        var codeOutputFile = fs.createWriteStream(path.join(__dirname, "..", "codeFiles", `codeOutputjava${codeId}.txt`),{})
        const filePath = path.join(__dirname,"..","codeFiles",`file${codeId}.java`);
        let pythonScript = spawn("java", [ filePath ]);
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
        pythonScript.stderr.on("data",(data) => {
            console.log(data.toString());
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
    jsCompiler,
    cppCompiler,
    javaCompiler
}