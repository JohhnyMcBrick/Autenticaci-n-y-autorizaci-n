const mongoose = require('mongoose');

const getConnection = async () => {
    try {
        const url = 'mongodb://usuarioIUD:TnKdbaMCuYAv2eq6@ac-2ngjcd8-shard-00-00.e55rizf.mongodb.net:27017,ac-2ngjcd8-shard-00-01.e55rizf.mongodb.net:27017,ac-2ngjcd8-shard-00-02.e55rizf.mongodb.net:27017/AppTest?ssl=true&replicaSet=atlas-zw351h-shard-0&authSource=admin&retryWrites=true&w=majority';
        await mongoose.connect(url);
        console.log('Star bd');
    } catch (error) {
        console.log(error);
        throw new Error('Error  connect DB')
    }
}

module.exports = {
    getConnection
}