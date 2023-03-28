// Index.js will contain the server code
// Import express
import express from "express";

// Instantiate the server using express as a constructor
const app = express();

// Set the express.json and express.urlencoded plugins to read json contents of incoming POST requests messages
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import router, then execute the function exported from it
import router from "./router.js";
// Make sure to pass app as we need it in router.js
router(app);

// Initialize the server to listen to port 3000 for message request
app.listen(3000, () => {
    // Message prompt to indicate that the server had started running
    console.log("Server started at port 3000.");
});
