const {merge} = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common,{
    mode: "development",
    
    //* devtool
    //(no need to install, built in)
    devtool:" inline-source-map",
    
    //* devServer, automate "npm run build or npx webpack --config webpack.config.js" 
    //(npm install before use)
    devServer:{
        static: "./dist",
        watchFile:["src/index.html"],
        port: 9000,
    },


})