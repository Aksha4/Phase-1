require("dotenv").config();

const express = require("express");
const app = express();

const mainRoutes = require("./src/routes/mainRoutes");

// Request Logger
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use("/", mainRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log("Available endpoints:");
    console.log(`http://localhost:${PORT}/`);
    console.log(`http://localhost:${PORT}/about`);
    console.log(`http://localhost:${PORT}/contact`);
    console.log(`http://localhost:${PORT}/health`);
});