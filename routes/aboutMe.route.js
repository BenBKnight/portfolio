const app = require("express");
const router = app.Router();

router.get("/aboutme", (req, res) => {
    res.render("aboutMe");
});

module.exports = router;
