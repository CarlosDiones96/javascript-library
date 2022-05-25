'use strict'

var express = require('express');
var path = require('path');

var app = module.exports = express();

var FILES_DIR = path.join(__dirname, 'files');

app.get('/', function(req, res){
    res.send(
        `<ul>
            <li>Download<a href="/files/notes/groceries.txt">groceries.txt</a></li>
            <li>Download<a href="/files/amazing.txt">amazing.txt</a></li>
            <li>Download<a href="/files/missing.txt">missing.txt</a></li>
            <li>Download<a href="/files/edfjiwefbweufi">random</a></li>
        </ul>`
    );
});

app.get('/files/:file(*)', function(req, res, next){
    res.download(req.params.file, {root: FILES_DIR}, function(err){
        if(!err) return;
        if(err.status !== 404) return next(err);
        res.statusCode = 404;
        res.send("Can't find file");
    });
});

if(!module.parent){
    app.listen(3000);
    console.log('Express started on port 3000');
}