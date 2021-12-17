let chai = require('chai');
let expect = chai.expect;
var exports = module.exports = {};
var fs = require('fs');
//request = require('request');
const http = require('http');
const pause = time => new Promise(resolve => setTimeout(resovle, time));
const Login = require('../Step_Definitions/Test_Suit.js');


function find_between(start_string, end_string, theString) {
    start_pos = theString.indexOf(start_string) + start_string.length;
    end_pos = theString.indexOf(end_string, start_pos);
    middlewaretoken = theString.slice(start_pos, end_pos);
}

let return_body;
let response;
let middlewaretoken;

exports.Start_App = async function() {
    var str = '';
    const options = {
        hostname: '127.0.0.1',
        port: 8000,
        method: 'GET',
      }

    callback = function(response) {
        //console.log(`statusCode: ${response.statusCode}`)

        response.on('data', function (chunk) {
                str += chunk;
        });

        response.on('end', function () {        
            //console.log(str);
        });

        response.on('error', error => {
            console.error(error)
        });

    }
    var req = http.request(options, callback).end();
}

exports.Login_Screen = async function() {
    var str = '';
    const options = {
        hostname: '127.0.0.1',
        port: 8000,
        path: '/accounts/login',
        method: 'GET',
        headers: {
            'Referer': 'http://127.0.0.1:8000/'
          }
      }

    callback = function(response) {
        //console.log(`statusCode: ${response.statusCode}`)

        response.on('data', function (chunk) {
                str += chunk;
        });

        response.on('end', function () {
            let start_string = 'csrfmiddlewaretoken" value="';
            let end_string = '">';
            //console.log(str);
            find_between(start_string, end_string, str);
        });

        response.on('error', error => {
            console.error(error)
        });

    }
    var req = http.request(options, callback).end();
}

exports.Login = async function(Username, Password) {
    var str = '';
    const options = {
        hostname: '127.0.0.1',
        port: 8000,
        path: '/accounts/login',
        method: 'GET',
        headers: {
            'Referer': 'http://127.0.0.1:8000/'
          },
        body : 'csrfmiddlewaretoken=${Middlewaretoken}&username=${Username}&password=${Password}&next='
      }

    callback = function(response) {
        //console.log(`statusCode: ${response.statusCode}`)

        response.on('data', function (chunk) {
                str += chunk;
        });

        response.on('end', function () {
            //console.log(str);
        });

        response.on('error', error => {
            console.error(error)
        });

    }
    var req = http.request(options, callback).end();
}

exports.Results = async function() {
    var str = '';
    const options = {
        hostname: '127.0.0.1',
        port: 8000,
        path: '/soccer/results',
        method: 'GET',
        headers: {
            'Referer': 'http://127.0.0.1:8000/'
          }
      }

    callback = function(response) {
        //console.log(`statusCode: ${response.statusCode}`)

        response.on('data', function (chunk) {
                str += chunk;
        });

        response.on('end', function () {
            let position;
            let score;
            
            expect(check(position, score)).to.eql("Scores and positions are correct");
        });

        response.on('error', error => {
            console.error(error)
        });

    }
    var req = http.request(options, callback).end();
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