const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    profileUrl:{
        type:String,
        required:true

    },
    about:{
        type:String,
        
    }
    
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;  // Use module.exports for exporting
