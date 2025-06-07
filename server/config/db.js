import mongoose from "mongoose"
// function to connect to mongo db database
const connectDB = async()=>{
    mongoose.connection.on('connected',()=>console.log('Database Connected'))

    await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`)
}
export  default connectDB