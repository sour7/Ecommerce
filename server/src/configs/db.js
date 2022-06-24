const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
"mongodb://sour:123@ac-0ebyiuh-shard-00-00.aemto6r.mongodb.net:27017,ac-0ebyiuh-shard-00-01.aemto6r.mongodb.net:27017,ac-0ebyiuh-shard-00-02.aemto6r.mongodb.net:27017/server-data?ssl=true&replicaSet=atlas-bqf3np-shard-0&authSource=admin&retryWrites=true&w=majority"
  );
};
