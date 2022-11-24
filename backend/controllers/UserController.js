const User = require("../models/user");
const jwt = require("jsonwebtoken");

module.exports = {
    userLogin: async function(req, res){
        try {
            let user = await User.findOne({email:req.body.email})

            if (user) {
                if (user.validPassword(req.body.password)) {
                    let jwtSecretKey = process.env.JWT_SECRET_KEY;
                    let data = {
                        time: Date(),
                        userEmail: user.email,
                    }
                    let token = jwt.sign(data, jwtSecretKey);
                     user.token = token;
                     const validUser = await user.save();
                     
                    return res.status(201).json({
                        validUser:{
                            name: validUser.name,
                            email: validUser.email,
                            role: validUser.role,
                            token: validUser.token,
                        },
                        message : "User Logged In",
                    })
                }
                else {
                    return res.status(400).json({
                        message : "Wrong Password"
                    });
                }
            }
            else {
                return res.status(400).json({
                    message : "User not found."
                });
            }
            
        } catch (err) {
            console.log('error 49', err)
            res.status(404).json({message: "Process Failed!"})
        }
    },
    userRegister: function(req, res){
        try {
            // Creating empty user object
    let newUser = new User();
  
    // Initialize newUser object with request data
    newUser.name = req.body.name 
    newUser.email = req.body.email
    newUser.role = req.body.role
  console.log('NewUser 49', newUser)
    // Call setPassword function to hash password
    newUser.setPassword(req.body.password);
    console.log('NewUser 52', newUser)
    // Save newUser object to database
    newUser.save((err, User) => {
        if (err) {
          return res.status(400).json({
            message: "Failed to add user.",
          });
        } else {
          return res.status(200).json({
            user: User,
            message: "User added successfully.",
          });
        }
      });
            
        } catch (err) {
            res.status(404).json({message: "Process Failed!"})
        }
    },
    getUserByToken: async function(req, res){
        
        let token = req.headers.authorization.split("Bearer ")[1];
        let user = await User.findOne({ token }).select("-token -salt -hash");
        
        return res.status(200).json({
            user:user,
            message: 'User found successfully!'
        })
    }
    
}