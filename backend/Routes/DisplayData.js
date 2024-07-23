const express = require("express");
const router = express.Router();

router.post("/shoesdata", (req, res) => {
  // res.send("This is FoddData");
  try {
    res.send({
      shoes_items: global.shoes_items,
      shoes_category: global.shoes_category,
    });
  } catch (error) {
    console.log(error.message);
    res.send("Server Error");
  }
});
module.exports = router;
