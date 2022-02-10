const app = require("express")();
const cors = require("cors");

app.get("/posts", cors(), (_, res) => {
    res.send("good");
});
