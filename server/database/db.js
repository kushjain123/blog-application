import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-ao3ez0b-shard-00-00.c8gx2fv.mongodb.net:27017,ac-ao3ez0b-shard-00-01.c8gx2fv.mongodb.net:27017,ac-ao3ez0b-shard-00-02.c8gx2fv.mongodb.net:27017/?ssl=true&replicaSet=atlas-9r78ki-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;