

// const express = require('express')

// const Router = express.Router()


// Router.get('/',(req,res)=>{

// res.status(200).json({
// meas:'hi'


// })

// })

// module.exports = Router

const express = require('express')

let User = require('../models/user_modle')
const bodyparser = require('body-parser')
const router = express.Router()

router.use(bodyparser.json())


router.route('/').get((req,res)=>{


    User.find()
    .then(users=> res.json(users))
    .catch(err => res.status(400).json("error"+err))

})



router.route('/add').post((req,res)=>{

const username  = req.body.username

const newUser = new User({username})

newUser.save()
.then(users=> res.json('user add'))
.catch(err => res.status(400).json("error"+err))



})



// const routes = new Router();

// Add routes
// routes.get('/', SessionController.store);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = router;

