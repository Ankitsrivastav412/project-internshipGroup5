const express = require('express')
const bodyParser = require('body-parser')
const route = require('./Routes/route.js')
const app = express()
const mongoose = require('mongoose')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb+srv://Ankitsrivastav412:G1fTVr3JcQfPfLGB@myfunctionup.f4mg0.mongodb.net/group5Database?authSource=admin&replicaSet=atlas-rbbsrv-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true",{
    useNewUrlParser:true
})
.then(()=>console.log("MongoDb connected"))
.catch(err=>console.log(err))
app.use('/',route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});