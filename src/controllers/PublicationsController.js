const Publication = require("../models/Publication")

exports.getPublication = async (req, res) => {
  try {
    const publications = await Publication.find()

    return res.json({errors: [], data: publications, })
  } catch (error) {
    console.error(error);
    return res.status(500).json({errors: ["Erro ao buscar publicação"]})
  }
}

exports.createPublication = async (req, res) => {
  const newPublication = req.body

  try {
    await Publication.create(newPublication)
    return res.json({errors: [], data: newPublication, })
  } catch (error) {
    console.error(error);

    return res.status(500).json({errors: ["Erro ao adicionar publicação"]})
  }
}

exports.updatePublication = async (req, res) => {
  const publicationId = req.params.id

  const updatedPublication = req.body

  try {
    await Publication.findByIdAndUpdate(publicationId, updatedPublication)
    return res.json({errors: [], data: updatedPublication, })
  } catch (error) {
    console.error(error);
    return res.status(500).json({errors: ["Erro ao atualizar publicação"]})
  }
}

exports.deletePublication = async (req, res) => {
  const publicationId = req.params.id

  try {
    await Publication.findByIdAndDelete(publicationId)
    return res.json({errors: [], data: undefined, })
  } catch (error) {
    console.error(error);
    return res.status(500).json({errors: ["Erro ao deletar publicação"]})
  }
}