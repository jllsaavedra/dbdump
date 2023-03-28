// Import mongoose
import mongoose from "mongoose";
// Add setup lines of code such as mongoose.connect
mongoose.connect("mongodb://localhost:27017/test");

//schema for unregistered user
const unregisteredSchema = new mongoose.Schema({
    bookmarks: Array
});


//schema for registered user
const registeredSchema = new mongoose.Schema({
    userId: String,
    email: String,
    password: String,
    fname: String,
    lname: String,
    history: Array,
    bookmarks: Array,
    bday: Date,
    contact: Number,
});

//schema for admin
const adminSchema = new mongoose.Schema({
    adminId: String,
    email: String,
    password: String,
    fname: String,
    lname: String
});

//schema for accomodation owner
const accOwnerSchema = new mongoose.Schema({
    userId: String,
    email: String,
    password: String,
    fname: String,
    lname: String,
    accomsList: Array,
    rating: Number,
    overallratings: Number,
    contact: Number,
    bday: Date
});

//schema for accomodation
const accomodationSchema = new mongoose.Schema({
    accId: String,
    ownerId: String,
    name: String,
    pax: Number,
    rates: Number,
    distance: Number,
    location: String,
    ratings: Number,
    amenities: String,
    contact: Number,
    description: String,
    rules: String,
    policy: String,
    availability: Boolean,
    category: String
});

const Unregistered = mongoose.model("unregistered_users", unregisteredSchema);
const Registered = mongoose.model("registered_users", registeredSchema);
const Admin = mongoose.model("admins", adminSchema);
const AccomodationOwner = mongoose.model("accommodation_owners", accOwnerSchema);
const Accomodation = mongoose.model("accomodations", accomodationSchema);

// Create the function saveUser
const createRegUser = (req, res) => {
    // Initialize an object called response with a success field
    // This would indicate if a document was successfully saved in the database
    var response = {
      success: false
    }
  
    // Create a new instance of the model
    // The value for each field will come from the body of the POST request
    const newRegUser = new registeredSchema({
        userId: req.body.userId,
        email: req.body.email,
        password: req.body.password,
        fname: req.body.fname,
        lname: req.body.lname,
        history: req.body.history,
        bookmarks: req.body.bookmarks,
        bday: req.body.bday,
        contact: req.body.contact,
    });
  
    // Call the save method on the created new instance of the model
    newRegUser.save((err) => {
      // Check for error before doing anything
      if(!err) {
        // Set the success field of response to true if no error was found
        console.log("User added successfully.");
        response["success"] = true;
        // Send response as server's response
        res.send(response);
      }
      // If an error is encountered
      // Send response with success = false as server's response
      else{
        res.send(response); 
      }
    });
  }

  // Export all needed functions to be exported in router.js
export { createRegUser }