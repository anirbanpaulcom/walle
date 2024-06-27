import mongoose from 'mongoose';

export async function connectToDatabase() {
   try{
    const uri = process.env.MONGODB_URI

    if (!uri) {
      throw new Error('MongoDB URI is not defined in environment variables.');
    }

    mongoose.connect(uri)
   const connect = mongoose.connection;

   connect.on('connected',()=>{
    console.log("mongodb connected successfully")
   })

   connect.on('error',(error)=>{
    console.log("mongodb connected error",  error)
    process.exit();
   })
}catch(error){
  console.log(error);
}
}
