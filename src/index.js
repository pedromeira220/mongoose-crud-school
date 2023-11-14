const express = require("express")
const app = express()

const PORT = 3333

const publicationsController = require("./controllers/PublicationsController")

app.use(express.json())

app.get("/publications", publicationsController.getPublication)
app.delete("/publications/:id", publicationsController.deletePublication)
app.post("/publications", publicationsController.createPublication)
app.put("/publications/:id", publicationsController.updatePublication)

app.listen(PORT, () => {
  console.log(`> Server running on port: ${PORT}`);
})