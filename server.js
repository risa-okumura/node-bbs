const express = require('express');
const app = express()
const db = require('./db.js');
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

//DBから記事情報を10件取得して返すapi.
app.get('/article',(req,res) =>{
    db.any('SELECT * FROM node_articles',[1])
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        console.error(error);
    });
});

app.post('/registerArticle',(req,res,next) =>{
    const name = req.body.name;
    const content = req.body.content;
    
    db.none('INSERT INTO node_articles(name,content) VALUES (${name},${content})'
            ,{name,content}        
        )
        .then(()=>{
            res.status(201)
            .json({
                status: 'success',
                message: 'successfully created'
            });
        })
        .catch((err)=> next(err));
})

app.listen(3000);