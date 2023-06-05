const mongoose=require('mongoose')

const NftSchema=new mongoose.Schema({

    user:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },

    imgurl:{
        type:String,
        required:true,
        unique:true
    },
    date:{
        type:Date,
        default:new Date()
    }

    
})

module.exports=mongoose.model('nft',NftSchema)