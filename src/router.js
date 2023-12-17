const router = require("express").Router();
const {
  createTicket,
  createBulkTicket,
  findAllTickets,
  findTicketById,
  findByUserName,
  updateById,
  updateByUsName,
  deleteById,
  bulkDelete,
} = require("./controller");

// get put delete related router by Id
router.route("/t/:id").get(findTicketById).put(updateById).delete(deleteById);

// get put delete related router by UserName
router
  .route("/u/:userName")
  .get(findByUserName)
  .put(updateByUsName)
  .delete(bulkDelete);

// get and post req
router.post("/", createTicket);
router.post("/bulk", createBulkTicket);
router.get("/", findAllTickets);

module.exports = router;
