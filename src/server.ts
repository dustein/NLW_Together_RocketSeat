import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.json({message: "OK GET raiz"})
})

app.listen(3030, ()=> console.log("SERVIDOR ativo!"))