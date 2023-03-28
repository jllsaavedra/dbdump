// Import the controller functions we have in controller.js
import { createRegUser } from "./controller.js";

// Creating a function router to make a reference to app, the server
const router = (app) => {

  // Define each endpoint and its corresponding controller function
  app.get("/create-reg-user", createRegUser);

}

// Export the router function because index.js will need it
export default router;

