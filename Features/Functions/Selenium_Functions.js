
let webdriver = require('selenium-webdriver');
require('chromedriver');
var By      = webdriver.By;
var Key     = webdriver.Key;
var until   = webdriver.until;
let chai    = require('chai');
let expect  = chai.expect;
const fs    = require('fs');
const { cleanSession } = require('selenium-webdriver/safari');

exports.Open_Link = async function(Link) {
    await driver.get(Link);
};

exports.Check_Text = async function (Field, Value) {
    await driver.sleep(500);
    const value = await driver.findElement(By.xpath(Field)).getText();
};

exports.Click = async function(Press) {
    await driver.findElement(By.xpath(Press)).click();
};

exports.Clear_Text = async function(Field) {
    await driver.findElement(By.xpath(Field)).clear();
};

exports.Enter_Text = async function(Field, Data) {
    await driver.findElement(By.xpath(Field)).clear();
    await driver.findElement(By.xpath(Field)).sendKeys(Data);
};

exports.Wait_For_Page_Loading = async function (Field) {
    var webElement = await driver.findElement(By.xpath(Field));
    if(webdriver.WebElementPromise.length == 0) {
    }
    else {
        await driver.wait(until.stalenessOf(driver.findElement(By.xpath(Field))), 200000).then();
    }
};

exports.Check_Value_Is_Correct = async function(Field, Value) {
    await driver.sleep(500);
    const GetValue = await driver.findElement(By.xpath(Field)).getText();
    expect(Value).to.eql(GetValue);
}

//Calculate the proper position of each team and compare with web page
//Verify that scores are sorted in descending order.
function check(position, score) {
    let value = "Fail"; 
    expected_score = score;
    expected_score.sort();               //Sort the score in the new variable         
    expected_score.reverse();            //Sort score in descending order
    expected_position = [];              //Declare array for expected position

    //Use expected_score to calculate the expected positions
    p_counter = 1;
    expected_position.push(p_counter);
    for(let i = 1; i < expected_score.length; i++) {
        if(expected_score[i-1] != expected_score[i]) {
            p_counter++;
        }
        expected_position.push(p_counter);
    }

    //Verify size and order of elements.  If this test fails it meands
    //the scores are not listed in descending order on the webpage!
    if(expected_score.toString() === score.toString() && expected_position.toString() === position.toString()) {
        value = "Scores and positions are correct";
    }
    else {
        value = "Scores or positions are incorrect";
    }
    return value;
}

exports.Test_Table_Values = async function(Field) {

    position = [];
    score = [];

    driver.findElements(By.xpath('//*[@id="showcase"]/div/div[2]/table/tbody/tr')).then(function(rows){
        for(let i = 1; i <= rows.length; i++) {
            driver.findElements(By.xpath('//*[@id="showcase"]/div/div[2]/table/tbody/tr[' + i + ']/td')).then(function(cells){
                for(let j = 1; j <= cells.length; j++) {
                    driver.findElement(By.xpath('//*[@id="showcase"]/div/div[2]/table/tbody/tr[' + i + ']/td[' + j +']')).then(function(theCell){
                        theCell.getText().then(function(theText){
                            if(j == 1) {
                                position.push(theText)
                            }
                            if(j == 3) {
                                score.push(theText)
                            }
                            //console.log("Cell: " + j + ":" + theText);
                        });
                    });
                }
            });
        }
    });
    await driver.sleep(5000);
    expect(check(position, score)).to.eql("Scores and positions are correct");
};



exports.Wait_For_Field = async function(Field) {
    await driver.wait(until.elementLocated(By.xpath(Field)), 20000);
    await driver.sleep(500);
};