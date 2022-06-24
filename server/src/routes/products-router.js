const Products= require("../models/Products")
const express= require('express')
const router= express.Router()


router.post("/products/create", async(req,res)=>{
    const product = new Products(req.body)
     try{
        await product.save()
       
        res.status(201).send({product})
    }catch(e){
        res.status(500).send(e)
    }
});

router.get('/products',async(req,res)=>{
    const products = await Products.find()
    res.json(products)
    
//     const page=parseInt(req.query.page) ;
//     const limit=parseInt(req.query.limit)

//     const startIndex = (page-1)*limit
//     const endIndex =page*limit

    
//     const results= {}
   
   
//  if(endIndex<products.length){

//      results.next= {
//          page:page+1,
//          limit:limit
//      }
//  }

//     if(startIndex>0){
//     results.prev= {
//         page:page-1,
//         limit:limit
//     }
// }
//     results.results= products.slice(startIndex,endIndex)
//     res.json(results )
   
})

router.get('/products/:id', (req, res,next) => {
    Products.findById(req.params.id)
    .then (result=>{
        res.status(200).json(result)
    }).catch(e=>{
        res.status(500).json({error:e})
    })
})
module.exports= router;