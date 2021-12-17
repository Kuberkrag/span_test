const cucumberJunitConvert = require('cucumber-junit-convert');

const options = {
    inputJsonFile: './Report/Report.json',
    outputXmlFile: './Report/Report.xml'
}

cucumberJunitConvert.convert(options);