const mongoose = require("mongoose");
const crypto = require("crypto");

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    student_id: String,
    name: String,
    age: Number,
    department: String,
    hall: String,
    status: String,
    phone: String,
    photo: String,
    role: String,
    email: String,
    salt: String,
    hash: String,
    pw_reset_token: String,
    token: String,
    created_at: {
        type: Date,
        default: Date.now,
    }
})

// Method to set salt and hash the password for a user 
UserSchema.methods.setPassword = function(password) { 
     
    // Creating a unique salt for a particular user 
       this.salt = crypto.randomBytes(16).toString('hex'); 
     
       // Hashing user's salt and password with 1000 iterations, 
        
       this.hash = crypto.pbkdf2Sync(password, this.salt,  
       1000, 64, `sha512`).toString(`hex`); 
   }; 
     
   // Method to check the entered password is correct or not 
   UserSchema.methods.validPassword = function(password) { 
       var hash = crypto.pbkdf2Sync(password,  
       this.salt, 1000, 64, `sha512`).toString(`hex`); 
       return this.hash === hash; 
   }; 

const User = mongoose.model("User", UserSchema);
module.exports = User;