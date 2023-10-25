const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const mapSchema=mongoose.Schema({
    image : {
        type:String
    }
});
const map=mongoose.model('map',mapSchema);
module.exports=map;