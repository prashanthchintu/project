
var webpackConfig= require('./webpack.config.js');

module.exports= function(config){
    config.set({
        browsers : ['Chrome'],                                             //which browser
        singleRun:true,                                                   //single execution(test cases)
        frameworks:['mocha'],                                              //which framework  
        files:['app/tests/**/*.test.js'],                                 //exact location
        preprocessors:{
            'app/tests/**/*.test.js' : ['webpack','sourcemap']             //source
        },
        reporters:['mocha'],                                                //report you generate
        reporters:['progress','html'],
        htmlReporter: {
            outputFile: 'mytest/units.html',
            pageTitle : 'my unit test report',
            subPageTitle: 'A Simple Test report App of Mocha Test',
            useLegacyStyle:true
        },
        client:{                                                            //which client
            mocha:{
                timeout:'5000'
            }
        },
        webpack : webpackConfig,                                              //which weback
        webpackServer :{
            noInfo:true
        }
    })
}