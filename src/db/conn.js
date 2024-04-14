const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://brujk169:123456@123@clusteryt.xfhtgut.mongodb.net/",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log(`connection successful`);
}).catch((e)=>{
    console.log(`no connection`);
});
// require('./db');
