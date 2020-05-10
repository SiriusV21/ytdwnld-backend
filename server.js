const express = require('express');
const cors = require('cors');
const youtubedl = require('youtube-dl');
const app=express();

app.use(cors());

app.get('/download', (req,res) => {
	var URL = req.query.URL;
  youtubedl.getInfo(URL, [], (err, info) => {
    if (err) res.json(err);
    res.json(info.url);
  }); 
});


app.listen(3000,() => {});