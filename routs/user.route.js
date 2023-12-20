const {Router}= require("express")
const { signup, signupage, loginpage, login, productui } = require("../controller/user.logic")
// const auth = require("../middleware/auth")
// const isauth = require("../middleware/auth")
const auth = require("../middleware/auth")

const router = Router()
router.post("/signup", signup)
router.post("/login", login)
router.get("/signuppage", signupage)
router.get("/loginpage", loginpage)
router.get("/product",auth, productui)
module.exports =router