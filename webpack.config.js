const pach = require("path")

module.exports = { 
    context: pach.resolve(__dirname, "src"), 
    mode: "development",
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        path: pach.resolve(__dirname, "dist")
    }
}
