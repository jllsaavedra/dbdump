// Import the controller file
const controller = require("./controller");

// Creating a function router to make a reference to app, the server
module.exports = (app) => {

  // Define each endpoint and its corresponding controller function
  app.post("/create-reg-user", controller.createRegUser);
  app.post("/search-reg-user", controller.searchRegUser);
  app.post("/edit-reg-user", controller.editRegUser);
  app.post("/delete-reg-user", controller.deleteRegUser);
  app.post("/find-all-reg-user", controller.findAllRegUser);

  app.post("/create-accommodation", controller.createAccommodation);
  app.post("/search-accommodations", controller.searchAccommodations);
  app.post("/update-availability", controller.updateAvailability);
  app.post("/delete-accommodation", controller.deleteAccommodation);
  app.post("/find-all-accommodations", controller.findAllAccommodations);
}

