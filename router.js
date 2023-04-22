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

  app.post("/create-accommodation-owner", controller.createAccomodationOwner);
  app.post("/find-accommodation-owner", controller.getAccomodationOwner);
  app.post("/update-accommodation-owner", controller.updateAccomodationOwner);
  app.post("/delete-accommodation-owner", controller.deleteAccomodationOwner);
  app.post("/find-all-accommodation-owner", controller.getAllAccomodationOwner);

  app.post("/create-admin", controller.createAdmin);
  app.post("/find-admin", controller.getAdmin);
  app.post("/update-admin", controller.updateAdmin);
  app.post("/delete-admin", controller.deleteAdmin);
  app.post("/find-all-admin", controller.getAllAdmin);
}

