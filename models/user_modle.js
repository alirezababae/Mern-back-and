const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Userssmodel = new Schema({

    username:{

        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3
    },
},
    
{

    timestamps:true

})


const Users = mongoose.model('usermod',Userssmodel)

module.exports = Users