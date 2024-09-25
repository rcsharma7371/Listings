const express = require("express");
const mongoose = require("mongoose");
const listing = require("./model/listing");
const path = require("path");
const Listing = require("./model/listing");
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate');


const app = express();
const port = 8080;

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

//set folder
//views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//public
app.use(express.static(path.join(__dirname, "public"))); 

// app.use(express.static('public', {
//   setHeaders: function (res, path) {
//       if (path.endsWith(".css")) {
//           res.setHeader("Content-Type", "text/css");
//       }
//   }
// }));
// json
app.use(express.urlencoded({ extended: true }));
//methodOverride
app.use(methodOverride('_method'));
//ejs-Mate
app.engine('ejs',ejsMate);


app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});

// app.get("/test/listing", (req, res) => {
//   let sampleListing = new listing({
//     title: "Vila",
//     description: "Best vila in Delhi",
//     // image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     price: 1300,
//     location: "Lajpat Nagar, New Delhi",
//   });
//   sampleListing
//     .save()
//     .then((res) => {
//       console.log("Data saved success", res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//     res.send("Test sample saved ")
// });

app.get("/", (req, res) => {
  console.log("Hi, I'm root");
  res.send("Home page");
});

//Index route

app.get("/listing", async (req, res) => {
  const allListing = await listing.find();
  res.render("./listings/index.ejs", { allListing });
});

//new route
app.get("/listing/new", (req, res) => {
  res.render("./listings/new.ejs");
});

//Add new listing to db
app.post("/listing", (req, res) => {
  // let newListing = req.body; //req.body returns a js object
  // console.log(newListing);
  let newListing = new Listing(req.body.listing);
  newListing
    .save()
    .then((res) => {
      console.log("Listing Add successfully");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/listing");
});

//Edit route
app.get('/listing/:id/edit',async (req,res)=>{
  let { id } = req.params;
  const data = await listing.findById(id);
  // res.send("edit route")
  res.render("./listings/edit.ejs",{data});
})

//Update route
app.put('/listing/:id',async(req,res)=>{
  let {id}=req.params;
  await listing.findByIdAndUpdate(id,{...req.body.listing});
  res.redirect(`/listing/${id}`);
})

//Delete route
app.delete('/listing/:id',async (req,res)=>{
  let {id} = req.params;
  let deletedListing = await listing.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect('/listing')
})

// Show route
app.get("/listing/:id", async (req, res) => {
  let { id } = req.params;
  const data = await listing.findById(id);
  console.log(data);
  res.render("./listings/detailedListing.ejs", { data });
});
