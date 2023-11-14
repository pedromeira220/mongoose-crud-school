const mongoose = require("mongoose")

mongoose.connect("mongodb://root_user:root_password@localhost:27017/admin")

module.exports = mongoose