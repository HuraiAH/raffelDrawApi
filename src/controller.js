const collection = require("../src/tickets");
// create all ticket
exports.createTicket = (req, res) => {
  let { userName, price } = req.body;
  let ticket = collection.create(userName, price);
  res.json(ticket);
  console.log(ticket);
};
// create bulk tickets
exports.createBulkTicket = (req, res) => {
  let { userName, price, quantity } = req.body;
  let ticket = collection.createBulk(userName, price, quantity);
  res.json(ticket);
  console.log(ticket);
};
// find all tickets

exports.findAllTickets = (req, res) => {
  let allTickets = collection.find();
  res.json(allTickets);
};

// find all tickets by id

exports.findTicketById = (req, res) => {
  const id = req.params.id;
  let singleIdTck = collection.findTicketById(id);
  if (!singleIdTck) {
    res.json("404 not found ok pagla");
  }
  res.json(singleIdTck);
};
// find all tickets by userName
exports.findByUserName = (req, res) => {
  const userName = req.params.userName;
  let userTicket = collection.findTicketByUserName(userName);
  if (!userTicket) {
    res.json("404 not found ok Gadha!");
  }
  res.json(userTicket);
};
//update tickets by id
exports.updateById = (req, res) => {
  const id = req.params.id;
  let updTic = collection.updById(id, req.body);
  if (!updTic) {
    res.json("404 not found ok !");
  }
  res.json(updTic);
};
//update tickets by userName
exports.updateByUsName = (req, res) => {
  const userName = req.params.userName;
  let updTic = collection.updByUsName(userName, req.body);
  if (!updTic) {
    res.json("404 not found ok gadha !");
  }
  res.json(updTic);
};
//delete by id
exports.deleteById = (req, res) => {
  const id = req.params.id;
  let updTic = collection.deleteById(id);
  if (!updTic) {
    res.json("404 not found ok !");
  }
  res.json(updTic);
};
