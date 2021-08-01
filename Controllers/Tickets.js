const User = require("../Models/User");

exports.getTickets = (req,res,next) => {
    
    res.send(User.Tickets);
    console.log("getTickets");
}

exports.postAddTicket = (req,res,next) =>{
    res.send("Ticket Added Succesfully");
    console.log("Ticket Added Succesfully");
}
