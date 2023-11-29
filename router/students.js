const express = require("express")
const router = express.Router()
//const student = require('../controllers/student')
const usercontroller = require("../controllers/student")

router.get("/students", usercontroller.index)

router.get("/student/:NIS", usercontroller.show)

router.post("/student", usercontroller.store)

router.put("/student/:NIS", usercontroller.update)

router.delete("/student/:NIS", usercontroller.delete)

module.exports = router
