// Import mongoose
const mongoose = require("mongoose");
// Add setup lines of code such as mongoose.connect
mongoose.connect("mongodb://localhost:27017/DBTeam");

// Create a mongoose model, define a schema directly in the model
const UnregisteredUser = new mongoose.model("Unregistered_User", {
    bookmarks: Array
});

// Create a mongoose model, define a schema directly in the model
const RegisteredUser = new mongoose.model("Registered_User", {
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

// Create a mongoose model, define a schema directly in the model
const Admin = new mongoose.model("Admin", {
    adminId: String,
    email: String,
    password: String,
    fname: String,
    lname: String
});

// Create a mongoose model, define a schema directly in the model
const AccomodationOwner = new mongoose.model("Accomodation_Owner", {
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

// Create a mongoose model, define a schema directly in the model
const Accomodation = new mongoose.model("Accomodation", {
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

// Create the function createRegUser
exports.createRegUser = (req, res) => {
    // Initialize an object called response with a success field
    // This would indicate if a document was successfully saved in the database
    var response = {
      success: false
    }
  
    // Create a new instance of the model
    // The value for each field will come from the body of the POST request
    const newRegUser = new RegisteredUser({
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

exports.searchRegUser = (req, res) => {
  const name = req.query.name;

  RegisteredUser.find({ $or: [{firstname: {$regex: name, $options: 'i'}}, {lastname: {$regex: name, $options: 'i'}}]}, (err,regusers) => {
      res.send(regusers)
  })
}

exports.editRegUser = (req, res) => {
  const userid = req.body.userId
  const newname = req.body.fname
  
  RegisteredUser.updateOne({ userid }, { fname: newname}, (err, output) => {
    if(!err) {
      return res.send(output)
    }
  })
}

exports.deleteRegUser = (req, res) => {
  const userId = req.body.userId
    
  RegisteredUser.deleteOne({ userId }, (err, output) => {
    if(!err) {
      return res.send(output)
    }
  })
}

exports.findAllRegUser = (req, res) => {
  RegisteredUser.find({}, (err, regusers) => {
    if(err || !regusers){
      console.log("No registered users to show!");
      return res.send({success:false});
    }
    return res.send(regusers)
  }).sort({"name":-1})
}

// Create the function createRegUser
exports.createAccommodation = (req, res) => {
  // Initialize an object called response with a success field
  // This would indicate if a document was successfully saved in the database
  var response = {
    success: false
  }

  // Create a new instance of the model
  // The value for each field will come from the body of the POST request
  const newAccommodation = new Accomodation({
    accId: req.body.accId,
    ownerId: req.body.ownerId,
    name: req.body.name,
    pax: req.body.pax,
    rates: req.body.rates,
    distance: req.body.distance,
    location: req.body.location,
    ratings: req.body.ratings,
    amenities: req.body.amenities,
    contact: req.body.contact,
    description: req.body.description,
    rules: req.body.rules,
    policy: req.body.policy,
    availability: req.body.availability,
    category: req.body.category
  });

  // Call the save method on the created new instance of the model
  newAccommodation.save((err) => {
    // Check for error before doing anything
    if(!err) {
      // Set the success field of response to true if no error was found
      console.log("Accomodation added successfully.");
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

exports.searchAccommodations = (req, res) => {

  Accomodation.find({name: { $regex: req.body.name, $options: 'i'}}, (err, accomodations) => {
    if(!err){
      console.log("I'm here!");
      if(accomodations != null){
        console.log("I'm here!");
        console.log(accomodations);
        res.send(accomodations);
      }
      else{
        let notFound = {};

        res.send(notFound);
      } 
    }
  });
}

exports.updateAvailability = (req, res) => {
  const accId = req.body.accId;
  const newAvailability = req.body.availability;

  Accomodation.updateOne({ accId }, { availability: newAvailability}, (err, output) => {
    if(!err) {
      return res.send(output)
    }
  })
}

exports.deleteAccommodation = (req, res) => {
  const accId = req.body.accId;
  
  Accomodation.deleteOne({ accId }, (err, output) => {
    if(!err) {
      return res.send(output)
    }
  })
}

exports.findAllAccommodations = (req, res) => {
  Accomodation.find({}, (err, accommodations) => {
    if(err || !accommodations){
      console.log("No accommodations to show!");
      return res.send({success:false});
    }
    return res.send(accommodations)
  }).sort({"name":-1})
}