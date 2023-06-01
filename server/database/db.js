import mongoose  from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://parthtrivedi:parth@google-docs-clone.hbpnt32.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;