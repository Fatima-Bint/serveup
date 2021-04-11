const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


/**defining our data
 * userSchema:
 *   1. firstName   --> String, required
 *   2. lastName    --> String, required
 *   3. email       --> String, required, unique
 *   4. password    --> String, required
 *   5. dateCreated --> Date, Date.now
 *   6. active      --> Boolean (true/false)  true
 *   7. isSuperuser --> Boolean (true/false)  false
 */

 //schema defines the data
//models are used to make database operation 

const userSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, requiresd: true},
    dateCreated: {type: Date, default: Date.now},
    active: {type: Boolean, default: true},
    isSuperuser: {type: Boolean, default: false}
})


userSchema.set('toJSON', {
    transform: (doc, user) => {
        user.id = user._id.toString()
        delete user._id
        delete user.__v
        delete user.password
    }
})

// Hash password before saving 

userSchema.pre("save", function(){
    const user = this;

    // Password hashing only works if user is new or modified

    // Generate a hash salt
    bcrypt.genSalt(10, (error, hash)=> {
        if (error) {
            next(error)
        } else {
            user.password = hash
            next()
        }
    })
})


const User = mongoose.model("User", userSchema)


module.exports = User