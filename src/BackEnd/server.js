const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://admin:admin@ngcluster-ad0h4.mongodb.net/G00354922?retryWrites=true&w=majority';
mongoose.connect(mongoDB,{useNewUrlParser:true});

app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//  Generate Schema
const Schema = mongoose.Schema;
const movieStarSchema = new Schema({
    name:String,
    age:String,
    sample:String,
    image:String,
    imdb:String
});

const MovieStarModel = mongoose.model('movieStars', movieStarSchema);


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/whatever', (req, res) => {
    res.send('whatever')
})

app.get('/name', (req, res) => {
    console.log(req.query.lastname)
    res.send('Welcome ' + req.query.firstname +
        ' ' + req.query.lastname);
})

app.post('/name', (req, res) => {
    console.log(req.body.lastname);
    res.send('post recieved from '
        + req.body.firstname + ' ' +
        req.body.lastname)
})

app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.post('/api/moviestars', (req,res) =>{
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.age);
    console.log(req.body.sample);
    console.log(req.body.image);
    console.log(req.body.imdb);

    MovieStarModel.create ({
        name: req.body.name,
        age: req.body.age,
        sample: req.body.sample,
        image: req.body.image,
        imdb: req.body.imdb
    });

    res.json('Data Uploaded');
})

app.delete('/api/moviestars/:id', (req, res)=>{
    console.log(req.params.id)
//  passes http request, delete method and deletes from api
    MovieStarModel.deleteOne({_id: req.params.id}, (error,data)=>{
        if(error)
            res.json(error);
        res.json(data);
    })
})

app.put('/api/moviestars/:id', (req,res)=>{
    console.log('Edit: '+req.params.id);
    console.log(req.body);
    MovieStarModel.findByIdAndUpdate(req.params.id, 
        req.body, 
        //  Configuration
        {new:true}, 
        (error,data)=>{
            res.json(data);
        }
        )
})

app.get('/api/moviestars/:id', (req, res) => {
    console.log(req.params.id);

    MovieStarModel.findById(req.params.id, (error, data) =>{
        res.json(data);
    });
});

app.get('/api/moviestars/:id', (req,res)=>{
    console.log('GET: req.params.id');
    MovieStarModel.findById(req.params.id, (error, data)=>{
        res.json(data);
    })
})

app.get('/api/moviestars', (req, res) => {

    MovieStarModel.find((error, data)=>{
        res.json({movieStars:data});
    });
})

app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('Hello ' + req.params.name)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
