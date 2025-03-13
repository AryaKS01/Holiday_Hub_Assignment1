const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const {
  createPassenger,
  getPassengers,
  updatePassenger,
  deletePassenger,
} = require("../controllers/passengers");

router.post(
  "/",
  upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "idCard", maxCount: 1 },
  ]),

  createPassenger
);

router.get("/", getPassengers);
router.put(
  "/:id",
  upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "idCard", maxCount: 1 },
  ]),
  updatePassenger
);
router.delete("/:id", deletePassenger);

module.exports = router;
