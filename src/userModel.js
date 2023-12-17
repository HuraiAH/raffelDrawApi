const shortId = require("shortid");

class Tickets {
  /**
   * ticket constructor will received userName & price
   * @param {string} Username
   * @param {number}  price
   */
  constructor(userName, price) {
    this.id = shortId.generate();
    this.userName = userName;
    this.price = price;
    this.createAt = new Date();
    this.updateAt = new Date();
  }
}
module.exports = Tickets;
