const mongoose = require('mongoose');
require('dotenv').config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");




const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: "Email address is required",
    },
    password: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      minlength: 8,
    },
    tokens: [{
      token:{
        type: String,
        required: true
      },
  }],
  },
  {
    timestamps: true,
  }
);

userSchema.methods.generateAuthToken= async function(){
    const user= this
    const token= jwt.sign({_id:user.id.toString() },process.env.JWT_token)
    user.tokens= user.tokens.concat({token});
    await user.save();
    return token;
}

userSchema.statics.findByCredentials= async(email,password)=>{
    const user= await User.findOne({email})
    if(!user){
        throw new Error('invalid credentails')
    }
    const isMatch= await bcrypt.compare(password,user.password)
    if(!isMatch){
        throw new Error('invalid credentails')
    }
    return user
}

userSchema.pre('save', async function(next){
    const user= this
    if(user.isModified("password")){
        user.password= await bcrypt.hash(user.password,8)
    }
next()
})



const User = mongoose.model("User", userSchema);
module.exports = User;
