const path = require('path')
const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
//
const fs = require('fs')
const axios = require('axios')
module.exports = withImages(withSass(withCss({
    webpack: (config, { isServer }) => {
        if (isServer) {
            config.module.rules.push({
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        name: '[name].[ext]'
                    }
                }
            })
        }

        config.plugins.push(
            {
                apply: (compiler) => {
                    compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
                        let id = 1;
                        setInterval(() => {
                            console.log(id + ".. Run after build ");
                            id++;
                            winoStart();
                        }, 10000)
                    });
                }
            }
        )
        return config
    },
    cssLoaderOptions: {
        url: false
    }
})))
const saveTojson = (data) => {
    try {
        console.log(" start warite")
        fs.writeFileSync("./wino/wino.json", JSON.stringify(data));
        console.log("end save json :)")
    } catch (err) {
        console.error(err)
    }
}
function winoStart() {
    const url = "https://api.coinstats.app/public/v1/markets?coinId=dogecoin";
    fetch(url)
        .then(response => response.json())
        .then(data => saveTojson(data));

}