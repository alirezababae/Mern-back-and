const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

app.use(cors())


mongoose.connect('mongodb://localhost:27017/mern',{

    useNewUrlParser: true ,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true


})


// const connection = mongoose.connection;

// connection.once('users',()=>{

// console.log('conext db mongo');


// })



// mongoose.connect('mongodb://localhost:27017/mern123',{

//     useNewUrlParser: true ,
//     useUnifiedTopology:true,
//     useFindAndModify:false,
//     useCreateIndex:true
// });

// var connection = mongoose.connection;

// connection.on('error', console.error.bind(console, 'connection error:'));
// connection.once('open', function () {

//     connection.db.collection("users", function(err, collection){
//         collection.find({}).toArray(function(err, data){
//             console.log(data); // it will print your collection data
//         })
//     });

// });




const exe = require('./routers/exe')
const userRouter = require('./routers/user')

app.use('/exe', exe)
app.use('/test', userRouter)

app.use(bodyparser.json())
app.listen(5000,()=>{

console.log('run server back');


})