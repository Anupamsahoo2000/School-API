const express = require("express");
const { addSchool, listSchools } = require("../controllers/schoolControllers");

const router = express.Router();

router.post("/addschool", addSchool);
router.get("/listschools", listSchools);

module.exports = router;
