const mongoose = require("../lib/mongoose")

const publicationSchema = new mongoose.Schema({
  src: String,
  createdAt: Date,
  text: String,
  likes: Number
})

module.exports = mongoose.model("Publication", publicationSchema)