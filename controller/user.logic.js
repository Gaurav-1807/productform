const { response } = require("express")
const productSchema = require("../modal/user.schema")


const formpage =(req,res)=>{
 res.render("form")
}
const form = async(req,res)=>{
 let data = await productSchema.create(req.body)
 res.send("successfully created") 
}
const Productpage = (req, res)=>{
    res.render("product")
}
const productdata = async(req, res)=>{
    let data = await productSchema.find()
    res.send(data)
}
const deleteProduct = async(req, res)=>{
    let {id} = req.params
    let data = await productSchema.findByIdAndDelete(id)
    res.send(data)
}

module.exports ={formpage,form,Productpage,productdata,deleteProduct}