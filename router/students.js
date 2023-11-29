const express = require("express")
const router = express.Router()
//const student = require('../controllers/student')
const usercontroller = require("../controllers/student")

router.get("/students", usercontroller.index)

router.get("/student/:id", usercontroller.show)

router.post("/student", usercontroller.store)

router.put("/student/:id", usercontroller.update)

router.delete("/student/:id", usercontroller.delete)

module.exports = router
