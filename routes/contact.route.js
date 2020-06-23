const app = require("express");
const router = app.Router();
// const db = require("../models/contact")

router.get("/contact", (req, res) => {
    res.render("contact");
});
// router.post("/contact/recruiter", (req, res) => {
//     db.Recruiter.create({
//         name: req.body.name,
//         email: req.body.email,
//         message: req.body.message
//     })
//     console.log("recruiter")
//         .then(() => {
//             res.status(200).end();
//         })
//         .catch(err => {
//             res.status(401).json(err);
//         })
// })

module.exports = router;