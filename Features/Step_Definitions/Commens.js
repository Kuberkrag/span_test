const { Given, When, setDefaultTimeout, After, Then } = require("cucumber");
const selenium  = require('./../Functions/Selenium_Functions.js');
let webdriver   = require('selenium-webdriver');
Download_File_Path = process.cwd(); 
require('chromedriver');
setDefaultTimeout(500000);
const Landing_Page = require('./Landing_Page.js');
const Test_Suit = require('./Test_Suit.js');

Given("I open chrome", async function() {
    const chrome = require('selenium-webdriver/chrome');
    let options = new chrome.Options();
    options.addArguments('--start-fullscreen');
    options.setUserPreferences({
        'plugins.always-open_pdf_externally'        : true,
        'profile.default_content_settings.popups'   : 0,
        'download.default_direcotry'                : Download_File_Path
    });
    driver = await new webdriver.Builder().setChromeOptions(options).forBrowser('chrome').build();
});

Given("I open chrome headless", async function() {
    const chrome = require('selenium-webdriver/chrome');
    let options = new chrome.Options();
    options.addArguments('--headless --start-fullscreen');
    options.setUserPreferences({
        'plugins.always-open_pdf_externally'        : true,
        'profile.default_content_settings.popups'   : 0,
        'download.default_direcotry'                : Download_File_Path
    });
    driver = await new webdriver.Builder().setChromeOptions(options).forBrowser('chrome').build();
});

Then("I navigate to the company website", async function() {
    await selenium.Open_Link('http://127.0.0.1:8000/');
});

Then("As a developer I navigate to API", async function() {
    await selenium.Open_Link('http://127.0.0.1:8000/api/');
});

Then("As a developer I navigate to the API games list", async function() {
    await selenium.Open_Link('http://127.0.0.1:8000/api/games/');
});

Then("As a developer I navigate to the API results list", async function() {
    await selenium.Open_Link('http://127.0.0.1:8000/api/results/');
});

Then("I should see {word} with text {word}", async function(Field, Text) {
        await selenium.Check_Text(eval(Field), eval(Text));
});

Then("I check if {word} to contain {word}", async function(Field, Value) {
    await selenium.Check_Value_Is_Correct(eval(Field), eval(Value));
});

Then("I wait for {word} to load", async function(Field) {
    await selenium.Wait_For_Page_Loading(eval(Field));
});

Then("I wait for {word} to show", async function(Field) {
    await selenium.Wait_For_Field(eval(Field));
});

Then("I enter {word} into {word}", async function(Value, Field) {
    await selenium.Enter_Text(eval(Field), eval(Value));
});

Then("I clear {word}", async function(Field) {
    await selenium.Clear_Text(eval(Field));
});

//This function can be diversified to include verients like "I click {word} link" for readability etc.
Then("I click {word} button", async function(Button) {
    await selenium.Click(eval(Button));

});

Then("I check scores and positions on table", async function(){
    await selenium.Test_Table_Values();
});


After(async function() {
    var me = this;
    await driver.takeScreenshot().then(async function(screenshot) {
        await driver.close();
        return me.attach(screenshot, "image/png");
    });
});