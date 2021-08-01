const express = require('express');

const UserRoutes = require("./Routes/UserRoutes");

const app = express();

express.urlencoded({extended:false});

app.use("/",UserRoutes);

app.listen(3000);