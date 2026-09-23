const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "API funcionando!"
    });
});

app.listen(PORT, () => {
    console.log("SERVER ON");
});