import express from "express";

//create express app
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the server");
});

export default app;
