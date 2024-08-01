//? mandatory
//* useful

//? import nodejs built in path module
const path = require("path");//uses node module syntax

//* install plugin
const HtmlWebpackPlugin =require("html-webpack-plugin");
const { watchFile } = require("fs");
const { runInContext } = require("vm");

module.export ={
    //? entry point
    entry: "./src/index.js",
    
    //? where compiled output will go
    output :{
        filename: "bundle.js",
        path: path.resolve(__dirname,"dist")
    },
    
    //? how files should be processed
    module:{
        //the rules for how it should be processed
        rules:[

            {//css
                test: /\.css$/i,
                use: ["style-loader","css-loader"]
            },

            {//images
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                types:"asset/resources",
            },

            {//fonts
                //if we want to add fonts in the future
            }
        ],

    },

    //* devtool
    devtool:" inline-source-map",

    //* devServer, automate "npm run build or npx ..."
    devServer:{
        static: "./dist",
        watchFile:["src/index.html"],
        port: 9000,
    },

    //* plugins
    plugins: [
        new HtmlWebpackPlugin({
            // where to get template from
            template: "./src/index.html",
            //title tag in html doc
            title: "development",
            //output file name
            filename:"index.html",
            //where to add html from bundled js
            inject:"div#content",
        })
    ],
    // optimization
    optimization: {
        runTimeChunk:"single",
    }
}