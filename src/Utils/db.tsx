import mongoose from 'mongoose';

const connect = async () => {
    try {
        const mongoURL = process.env.MONGO!
        
         await mongoose.connect(mongoURL);
        
    } catch (error) {
        // console.log(error);
        
        throw new Error("Connection failed")
    }
}

export default connect