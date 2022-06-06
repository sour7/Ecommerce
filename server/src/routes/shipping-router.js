const ShippingAddress= require("../models/ShippingAddress")
const express= require('express')
const router= express.Router()


router.post("/address", async(req,res)=>{
    const shippingAddress = new ShippingAddress(req.body)
     try{
        await shippingAddress.save()
       
        res.status(201).send({shippingAddress})
    }catch(e){
        res.status(500).send(e)
    }
});

router.get('/myaddress',async(req,res)=>{
    const myaddress = await ShippingAddress.find()
	res.send(myaddress)
})

router.get('/myaddress/:id', (req, res,next) => {
    ShippingAddress.findById(req.params.id)
    .then (result=>{
        res.status(200).json(result)
    }).catch(e=>{
        res.status(500).json({error:e})
    })
})
module.exports= router;