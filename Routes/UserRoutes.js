const express = require('express');
const app = express();

const TicketsController = require("../Controllers/Tickets");

app.get("/getTickets",TicketsController.getTickets);

app.post("/addTicket",TicketsController.postAddTicket);

module.exports = app;