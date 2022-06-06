const mongoose= require ('mongoose')

const connectionUrl= "mongodb://127.0.0.1:27017/testdb"

mongoose.connect(connectionUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
// module.exports = () => {
//     mongoose.connect('mongodb://localhost:27017/candy')
// }