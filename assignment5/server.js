const { setDefaultResultOrder } = require('dns');
var express = require('express');
var app = express();
var fs = require("fs");
var port = 3000;


/*
function Home() {
    return (
        <div className="Home">
          <div class="header">
             <h1 style={{textAlign: "center"}}>Home</h1>
            </div>
          </div>
      );
    }

export default Home;
*/
/*
const MyComponent = () => { 
  return React.createElement("div", null, React.createElement("p", null, "This is not HTML...!"), React.createElement("p", null, "Wait...Is this JavaScript?"), React.createElement("p", null, "No, What the hell is this?"), React.createElement("p", null, "This is JSX.")); 
}; 
*/

app.get('/students', function (req, res) {
    let dataFile = require('./data.json');
    let stringData = JSON.stringify(dataFile.students, null, 2);
    res.write('<h1>Student Data<h1>');
    res.write('<button><a href="http://localhost:3000/students/127" class="button">Student Data for Charles</a></button>');
    res.write('<button><a href="http://localhost:3000/students/280" class="button">Student Data for Eric</a></button>');
    res.write('<button><a href="http://localhost:3000/students/311" class="button">Student Data for Gabriel</a></button>');
    res.write('<h1 style="font-size:10vw"></h1>');
    res.write('<p style="font-family:verdana"></p>');
    res.end( stringData );
 })

 app.get('/students/:Id', function (req, res) {
    let dataFile = require('./data.json');
    for (let i = 0; i < dataFile.students.length; i++) {
        if (dataFile.students[i].studentid == req.params.Id) {
            let stringData = JSON.stringify(dataFile.students[i], null, 2);
            res.end( stringData );
        }
    }
 })

 app.get('/students/:Id/classes', function (req, res) {
    let dataFile = require('./data.json');
    for (let i = 0; i < dataFile.students.length; i++) {
        if (dataFile.students[i].studentid == req.params.Id) {
            let stringData = JSON.stringify(dataFile.students[i].classes, null, 2);
            res.end( stringData );
        }
    }
 })

 app.get('/students/:Id/classes/:Courseno', function (req, res) {
    let dataFile = require('./data.json');
    for (let i = 0; i < dataFile.students.length; i++) {
        if (dataFile.students[i].studentid == req.params.Id) {
            for (let o = 0; o < dataFile.students[i].classes.length; o++) {
                if (dataFile.students[i].classes[o].courseno == req.params.Courseno) {
                let stringData = JSON.stringify(dataFile.students[i].classes[o], null, 2);
                res.end( stringData );
                }
            }
        }
    }
 })

var server = app.listen(port, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })
