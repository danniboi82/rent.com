const db = require('../models');
const jwt = require('jsonwebtoken');


exports.signin = async function(req, res, next){
    try {
        //find the user
        let user = await db.User.findOne({
            email:req.body.email
        });
        //check if user's password matches what is in the server
        let { id, username, profileImageUrl } = user;
        let isMatch = await user.comparePassword(req.body.password);
        //if passwords match then
        if (isMatch) {
            let token = jwt.sign({
                id,
                username,
                profileImageUrl
            },
        process.env.SECRET_KEY
    );
    //log them in 
    return res.status(200).json({
        id,
        username,
        profileImageUrl,
        token
    });
        } else {
            return next({
                message : "Invalid Email/Password"
            });
        }
    } catch (error) {
        return next({ status : 400, message: "Invalid Email/Password"});
    }
}

exports.signup = async function(req, res, next) {
    try {
    //create a user
      let user = await db.User.create(req.body);
      let { id, username, profileImageUrl } = user;
      //create a token for signing in
      let token = jwt.sign(
        {
          id,
          username,
          profileImageUrl
        },
        process.env.SECRET_KEY
      );
      return res.status(200).json({
        id,
        username,
        profileImageUrl,
        token
      });
    } catch (err) {
        //Check error 
      if (err.code === 11000) {
        err.message = "Sorry, that username and/or email is taken";
      }
      return next({
        status: 400,
        message: err.message
      });
    }
  };