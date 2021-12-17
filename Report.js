var reporter = require('cucumber-html-reporter');

var options = {
    theme: 'bootstrap',
    jsonFile: './Report/Report.json',
    output: './Report/Report.html',
    reportSuiteAsScenarios: true,
    ScenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "App Version": "1.0.0",
        "Test Environment": "Test",
        "Browser": "Chrome",
        "Platform": "Windows 10",
    }
};

reporter.generate(options);