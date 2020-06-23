// module.exports = function(sequelize, DataTypes) {
//     const Recruiter = sequelize.define("Recruiter", {
//         Name: {
//             type: DataTypes.STRING
//         },
//         email: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: false,
//             validate: {
//                 isEmail: true
//             }
//         },
//         message: {
//             type: DataTypes.STRING,
//             allowNull: false
//         }
//     })
//     return Recruiter;
// }