const express = require("express");
const app = express();

const mainRoutes = require("./src/routes/mainRoutes");

app.use("/", mainRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
