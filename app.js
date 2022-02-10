const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.static("public"));
app.use(express.json());

const admin = ["holygod", "itgeltissmart"];
const db = [
    {
        title: "first post",
        date: "1234",
        body: "My name is Itgelt and I am blogging about my blah blah blah ...",
    },
];
app.get("/posts", (_, res) => {
    res.json(db);
});

app.post("/newpost", cors({ origin: "*" }), (req, res) => {
    if (req.query.username === admin[0] && req.query.password === admin[1]) {
        db.push(req.body);
        res.send("-------published-------");
    } else {
        res.json({ title: "...", date: "...", body: "..." });
    }
});

app.listen(3000);
