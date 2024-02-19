const { Router } = require("express");
// const models = require("./../database/models")

const route = Router()

//  GET     /api/user
route.get("/user", async (req, res) => {
    const usuarios = ["Hola Usuarios"]// await models.User.findAll()
    return res.status(200).json(usuarios)
})
//  POST    /api/user
route.post("/user", (req, res) => {
    const datos = req.body;

    return res.status(200).json(datos)
})


module.exports = route