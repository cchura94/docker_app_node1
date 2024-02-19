const express = require("express")
const route = require("./routes")
require('dotenv').config()

const PORT = process.env.PORT || 3000
const app = express()

// json
app.use(express.json());

app.use("/api", route)


app.listen(PORT, () => {
    console.log(`servidor iniciado en 127.0.0.1:${PORT}`)
});