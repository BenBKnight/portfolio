const app = require("express");
const router = app.Router();

const home = require("./home.route");
const aboutMe = require("./aboutMe.route");
const contact = require("./contact.route");

router.use('/', home);
router.use(aboutMe);
router.use(contact);

module.exports = router;
