import mongoose from "mongoose";
const MERNuser = mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },

    email:
    {
        type:String,
        required:true
    },

    gender:
    {
        type:String,
        required:true
    }
})

// export default mongoose.model('MERNUsers',MERNuser) //creating the collection using ths schema
const User = mongoose.model('MERNUsers', MERNuser);
export default User;
