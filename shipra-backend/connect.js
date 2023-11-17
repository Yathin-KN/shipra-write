const mongoose=require('mongoose')
let gfs;
const connect_DB=()=>{
    const url="mongodb+srv://yathin:yathin2184@cluster0.tmypqji.mongodb.net/"
    mongoose.set("strictQuery", true);
    mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to the database ");
    })
    .catch((err) => {
      console.error(`Error connecting to the database. n${err}`);
    });
}

module.exports=connect_DB;