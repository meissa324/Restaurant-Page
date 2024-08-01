const {merge} = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common,{
    mode: "production",
    
    //* devtool
    //(no need to install, built in)
    devtool:"source-map",
    
    // optimization
    optimization: {
        runtimeChunk:"single",
    }
})