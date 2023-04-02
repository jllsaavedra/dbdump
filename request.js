import needle from "needle";

// Send a POST request for the POST /create-reg-user endpoint
needle.post(
    // URL
    "http://localhost:3000/create-reg-user",
    // Object representing the contents of the request body
    {   userId: "IoGAOGOGOIGEHJFTRHJ",
        email: "req.body.email",
        password: "req.body.password",
        fname: "req.body.fname",
        lname: "req.body.lname",
        history: [],
        bookmarks: [],
        bday: "01/01/2001",
        contact: 1
    },
    // Callback function
    (error, response) => {
        // This response body should print an object with field success = true
        console.log(response.body);
    }
);