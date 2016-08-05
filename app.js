import express from "express";
import {routes} from "./lib/ctrl-routes";

import users from "./controllers/users";

// Create our Express application
var app = express();

// Use environment defined port or 3000
var port = process.env.PORT || 3000;

// Register all our routes with /api
app.use('/api/users', routes(users));

// Start the server
app.listen(port);
console.log('Insert beer on port ' + port);


