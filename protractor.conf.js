exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    //directConnect: true,

    getPageTimeout: 120000,
    allScriptsTimeout: 50000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
      capabilities: {
        browserName: 'chrome'
      },
    

       plugins: [{
        package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
        options:{
          automaticallyGenerateReport: true,
          removeExistingJsonReportFile: true,
          reportName: 'CucumberJS Report',
          pageFooter: '<div><p>Created by FreelanceQA</p></div>'
        }
    }],
 

    maxSessions: 2,
    specs: ['features/*.feature'],

    cucumberOpts: {
        // require step definitions
        tags: '@prod' ,
        format: 'json:.tmp/results.json',
        require: [
          'features/stepDefinitions/stepDefinition.js' // accepts a glob
        ]
      }
    };
  