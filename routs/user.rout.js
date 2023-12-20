const {Router} = require("express")
const { formpage, form, Productpage, productdata, deleteProduct } = require("../controller/user.logic")

const router = Router()

router.get("/formpage",formpage)
router.post("/form",form)
router.delete("/delete/:id",deleteProduct)
router.get("/productdata",productdata)
router.get("/products",Productpage)

module.exports =router