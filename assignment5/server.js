const { setDefaultResultOrder } = require('dns');
var express = require('express');
var app = express();
var fs = require("fs");
var port = 3000;


app.get('/students', function (req, res) {
    let dataFile = require('./data.json');
    let stringData = JSON.stringify(dataFile.students, null, 2);
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
