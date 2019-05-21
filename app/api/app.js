const express = require("express");
const path = require("path");
const compression = require("compression");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || "8080";

app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, "../web")));

/* Static */
app.get("/*", (req, res) => {
    res.sendFile(path.resolve("../web/index.html"));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});