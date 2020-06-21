const express = require('express')

var Exe = require('../models/exer_modle')
const Usermodel = require('../models/user_modle')
const bodyParser = require('body-parser')


const Router = express.Router()

Router.use(bodyParser.json())

Router.route('/').get((req, res) => {

 Exe.find()
        .then(docs => {
            // const objecterro = {


            //     parados:docs.map(items => {

            //         return{

    
            //             username:items


            //         }


            //     })


            // }

            res.status(200).json(docs)
        })
        .catch(err => res.status(404).json('error' + err))


        
})

Router.route('/add').post((req, res) => {

    const username = req.body.username
    const description = req.body.description
    const duration = Number(req.body.duration)
    const date = Date.parse(req.body.date)

    const newExe = new Exe({

        username,
        description,
        duration,
        date,

    })

    newExe.save()
        .then(() => res.json('expreon Added bacckend'))
        .catch(err => res.status(400).json('error' + err))
})



Router.route('/find:id').get((req,res)=>{


    Exe.findById(req.params.id)
    .then(xersin => res.status(200).json(xersin))
    .catch(err => res.status(400).json('errors'+err))


})


Router.route('/del:id').delete((req,res)=>{


    Exe.findByIdAndDelete(req.params.id)
    .then(xersin => res.status(200).json(xersin))
    .catch(err => res.status(400).json('errors'+err))


})


Router.route('/update:id').post((req,res)=>{


    Exe.findById(req.params.id)
   
   
    .then(xersin => {

        xersin.username = req.body.username
        xersin.description = req.body.description
        xersin.duration = Number(req.body.duration)
        xersin.date = Date.parse(req.body.date)
    
        xersin.save()
        .then(() => res.json('update Added'))
        .catch(err => res.status(400).json('error' + err))

    })

    .catch(err => res.status(400).json('errors'+err))


})



// Router.route('/:id').delete((req, res) => {

//     Exe.findByIdAndDelete(req.params.id)
//         .then(exeric => res.json(exeric))
//         .catch(err => res.status(400).json('error' + err))

// })

// Router.route('/update:id').post((req, res) => {

//     Exe.findById(req.params.id)
//         .then(exeric => {

//             exeric.username = req.body.username
//             exeric.description = req.body.description
//             exeric.duration = Number(req.body.duration)
//             exeric.date = Date.parse(req.body.Date)

//             exeric.save()
//                 .then(() => res.json('data ex updatee'))
//                 .catch(err => res.status(400).json('error' + err))
//         })



//         .catch(err => res.status(400).json('error' + err))

// })


module.exports = Router