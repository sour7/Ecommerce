const User= require("../models/User")
const auth= require("../middleware/auth")
const express= require('express')
const router= express.Router()

//create user
router.post("/user/register", async(req,res)=>{
    const user = new User(req.body)
     try{
        await user.save()
        const token= user.generateAuthToken()
        res.status(201).send({user,token})
    }catch(e){
        res.status(500).send(e)
    }
})

// sign in user

router.post("/user/login", async(req, res)=>{
    try{
        const user= await User.findByCredentials(req.body.email, req.body.password)
        const token= await user.generateAuthToken()
        // const user= await User.findByCredentials(req.body.email, req.body.password, req.body.token)
        res.status(200).send({user,token})
    }catch(e){
        res.status(500).send(e)
    }
})


// logout
router.post('/user/logout', auth, async (req,res)=>{
try{
      req.user.tokens= req.user.tokens.filter((token)=>{
      return token.token!==token
        
      })
      await User.save()
        res.status(200).send({message:"user logged out Successfully"})
}catch(e){
    res.status(500).send(e)
}
})

// get user 

router.get('/user/id',auth, async(req,res)=>{
    res.send(req.user)
})

module.exports= router;