const mongoose= require("mongoose");

const connectDb=async()=>{
    try{
const conn=await mongoose.connect(process.env.MONGO_URI,{
    //useNewUrl: true,
    //useUnifiedTopology: true,
    //useFindandModify:false
})
console.log(`MongoDb: ${conn.connection.host}`);
    }catch(err){console.error(err);}
}
module.exports =connectDb;