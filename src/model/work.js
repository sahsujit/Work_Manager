const mongoose = require('mongoose');
const { Schema } = mongoose;

const workSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true,
        enum:["pending", "completed"],
        default: "pending"
    },
    addedDate:{
        type: Date,
        default: Date.now(),
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',

        required:true
        
    }

})

const Work = mongoose.models.Work || mongoose.model('Work', workSchema);

module.exports = Work;  // Use module.exports for exporting
