const router = require('express').Router()

const {signup, login} = require('../controllers/auth')


// Route for signup
router.post("/api/auth/signup", signup)

// Route for login
router.post("/api/auth/login", login)

// Route for getting user details 
// router.get("/api/auth/:id", getUserDetails)



module.exports = router