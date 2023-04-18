const needle = require("needle");

// // Send a POST request for the POST /create-reg-user endpoint
// needle.post(
//     // URL
//     "http://localhost:3000/create-accommodation",
//     // Object representing the contents of the request body
//     {   accId: "10471280471280471",
//         ownerId: "ogvn13h-0t01",
//         name: "Whitehouse's Apartment",
//         pax: 1,
//         rates: 10000,
//         distance: 10,
//         location: "Batong Malake",
//         ratings: 5,
//         amenities: "yes",
//         contact: 1,
//         description: "description",
//         rules: "rules",
//         policy: "req.body.policy",
//         availability: true,
//         category: "req.body.category"
//     },
//     // Callback function
//     (error, response) => {
//         // This response body should print an object with field success = true
//         console.log(response.body);
//     }
// );

// // Send a POST request for the POST /create-reg-user endpoint
// needle.post(
//     // URL
//     "http://localhost:3000/create-accommodation",
//     // Object representing the contents of the request body
//     {   accId: "2144125f10418048",
//         ownerId: "fgi3opth1i0ht10",
//         name: "BF's Apartment",
//         pax: 1,
//         rates: 10000,
//         distance: 10,
//         location: "Batong Malake",
//         ratings: 5,
//         amenities: "yes",
//         contact: 1,
//         description: "description",
//         rules: "rules",
//         policy: "req.body.policy",
//         availability: true,
//         category: "req.body.category"
//     },
//     // Callback function
//     (error, response) => {
//         // This response body should print an object with field success = true
//         console.log(response.body);
//     }
// );

// needle.post(
//     "http://localhost:3000/update-availability",
//     {
//         accId: "10471280471280471",
//         availability: false
//     },
//     // Callback function
//     (error, response) => {
//         // This response body should print an object with field success = true
//         console.log(response.body);
//     }
// )

// needle.post(
//     "http://localhost:3000/delete-accommodation",
//     {
//         accId: "2144125f10418048",
//     },
//     // Callback function
//     (error, response) => {
//         // This response body should print an object with field success = true
//         console.log(response.body);
//     }
// )

// needle.post(
//     "http://localhost:3000/search-accommodations",
//     {
//         name: "w"
//     },
//     // Callback function
//     (error, response) => {
//         // This response body should print an object with field success = true
//         console.log(response.body);
//     }
// )

// needle.post(
//     "http://localhost:3000/delete-reg-user",
//     {
//         userId: "FJOHFO1H8-0F1FBJOASF"
//     },
//     // Callback function
//     (error, response) => {
//         // This response body should print an object with field success = true
//         console.log(response.body);
//     }
// )

// needle.post(
//     "http://localhost:3000/delete-reg-user",
//     {
//         userId: "IoGAOGOGOIGEHJFTRHJ"
//     },
//     // Callback function
//     (error, response) => {
//         // This response body should print an object with field success = true
//         console.log(response.body);
//     }
// )

// // Send a POST request for the POST /create-reg-user endpoint
// needle.post(
//     // URL
//     "http://localhost:3000/create-reg-user",
//     // Object representing the contents of the request body
//     {   userId: "FJOHFO1H8-0F1FBJOASF",
//         email: "req.body.email",
//         password: "req.body.password",
//         fname: "Jacob",
//         lname: "req.body.lname",
//         history: [],
//         bookmarks: [],
//         bday: "01/01/2001",
//         contact: 1
//     },
//     // Callback function
//     (error, response) => {
//         // This response body should print an object with field success = true
//         console.log(response.body);
//     }
// );

// // Send a POST request for the POST /create-reg-user endpoint
// needle.post(
//     // URL
//     "http://localhost:3000/create-reg-user",
//     // Object representing the contents of the request body
//     {   userId: "uohbcu02y08ry28gh01h30",
//         email: "req.body.email",
//         password: "req.body.password",
//         fname: "John",
//         lname: "req.body.lname",
//         history: [],
//         bookmarks: [],
//         bday: "01/01/2001",
//         contact: 1
//     },
//     // Callback function
//     (error, response) => {
//         // This response body should print an object with field success = true
//         console.log(response.body);
//     }
// );


needle.post(
    "http://localhost:3000/search-reg-user",
    {
        name: "J"
    },
    // Callback function
    (error, response) => {
        // This response body should print an object with field success = true
        console.log(response.body);
    }
)

// needle.post(
//     "http://localhost:3000/edit-reg-user",
//     {
//         userId: "FJOHFO1H8-0F1FBJOASF",
//         fname: "Definitely Not Jacob"
//     },
//     // Callback function
//     (error, response) => {
//         // This response body should print an object with field success = true
//         console.log(response.body);
//     }
// )

// needle.post(
//     "http://localhost:3000/delete-reg-user",
//     {
//         userId: "uohbcu02y08ry28gh01h30"
//     },
//     // Callback function
//     (error, response) => {
//         // This response body should print an object with field success = true
//         console.log(response.body);
//     }
// )

// needle.post(
//     "http://localhost:3000/find-all-reg-user",
//     {
//     },
//     // Callback function
//     (error, response) => {
//         // This response body should print an object with field success = true
//         console.log(response.body);
//     }
// )

