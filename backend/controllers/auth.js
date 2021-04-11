const User = require('../models/user')

//middlewares - has access to request and response Object

const userControl = {}
//signup

//returns the saved user entries back and saved in newUser
    
    //newUser send a responds to the user so we would have to wait hence await
userControl.signup = async (request, response) => {
    const {firstName, lastName, email, password} = request.body;

const user = new User({firstName, lastName, email, password})


try {
    const newUser = await user.save()
    response.send({message: "User Created Successfully", newUser})
} catch (exception) {
    console.log(exception)
    response.status(500).send({error: "internal server error"})
}
}

userControl.login = async (request, response) => {
    // Login user

    const {email, password} = request.body
    await User.findOne({email: email}, (error, user) => {
        if (error) {
            response.status(500).send({error: "INTERNAL SERVER ERROR"})
        }

        if (!user) {
            response.status(401).send({message: "Invalid Username or password"})
        }
    })
}

 //Vercl
     


module.exports = userControl
