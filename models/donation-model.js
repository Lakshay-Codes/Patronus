import mongoose from "mongoose";    
const donationSchema=new mongoose.Schema({
    amount : {
        type : Number,
        required : true
    },
    message:{
        type : String,
    },
    campaign:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'campaigns',
        required : true
    },
    user :{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'users',
        required : true
    } ,
    paymentId:{
        type: String,
        required : true
    }
},{timestamps:true})

const DonationModel=mongoose.model('donations',donationSchema);
export default DonationModel;