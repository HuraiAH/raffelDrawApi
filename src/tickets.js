const Ticket = require("../src/userModel");
const { readFile, writeFile } = require("./utils");
const fs = require("fs/promises");
const path = require("path");
const dbPath = path.resolve("data", "data.json");
const tickets = Symbol("tickets");

class UserCollection {
  constructor() {
    (async () => {
      this[tickets] = await readFile();
    })();
  }

  /**
   * Creates a new ticket.
   * @param {string} userName
   * @param {number} price
   * @returns {Ticket}
   */
  create(userName, price) {
    const ticket = new Ticket(userName, price);
    this[tickets].push(ticket);

    const data = JSON.stringify(this[tickets]);
    // fs.writeFile(dbPath, data)
    //   .then(() => console.log("Data successfully written to file"))
    //   .catch((err) => console.error(`Error writing data to file: ${err}`));
    writeFile(dbPath, data);

    return ticket;
  }

  // createBulk tickets
  createBulk(userName, price, quantity) {
    let result = [];
    for (let i = 0; i <= quantity; i++) {
      let ticket = this.create(userName, price);
      result.push(ticket);
    }
    const data = JSON.stringify(result);
    writeFile(dbPath, data);
    return result;
  }

  /**
   * Finds all tickets.
   * @returns {Ticket[]}
   */
  find() {
    return this[tickets];
  }
  // find tickets by id

  findTicketById(id) {
    let ticket = this[tickets].find((ticket) => ticket.id === id);
    return ticket;
  }
  // find tickets by userName
  findTicketByUserName(userName) {
    let ticket = this[tickets].filter((ticket) => ticket.userName === userName);
    return ticket;
  }
  // update tickets by id
  updById(tId, tBody) {
    let ticket = this.findTicketById(tId);
    if (ticket) {
      ticket.userName = tBody.userName || ticket.userName;
      ticket.price = tBody.price || ticket.price;
    }
    let data = JSON.stringify(this[tickets]);
    writeFile(dbPath, data);
    return ticket;
  }
  // update tickets by userName
  updByUsName(tUser, tBody) {
    let ticket = this.findTicketByUserName(tUser);
    let updatedTickets = ticket.map((tickets) =>
      this.updById(tickets.id, tBody)
    );
    let data = JSON.stringify(this[tickets]);
    writeFile(dbPath, data);
    return updatedTickets;
  }

  // delete tickets by id
  deleteById(ticketId) {
    let index = this[tickets].findIndex((ticket) => ticket.id === ticketId);
    if (index === -1) {
      return false;
    } else {
      this[tickets].splice(index, 1);

      return console.log("all data deleted!");
    }
  }
  // bulk delete by user name
  bulkDelete(userName) {
    let userTickets = this.findTicketByUserName(userName);
    let deleteResult = userTickets.map((ticket) => this.deleteById(ticket.id));
    let data = JSON.stringify(deleteResult);
    writeFile(dbPath, data);
    return deleteResult;
  }
}

const ticketCollection = new UserCollection();
module.exports = ticketCollection;
