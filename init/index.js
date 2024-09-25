const mongoose = require('mongoose');
const data = require('./data')
const listing = require('../model/listing');

main()
  .then((res) => {
    console.log("Connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

function insertData(){
    listing.deleteMany({});
    // console.log(data.data);
    listing.insertMany(data.data).then(res=>{console.log("Data inserted into db")}).catch(err=>{console.log(err)})
}
insertData();