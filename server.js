const express = require('express');
const app = express();
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.send("<h1>Hello World!</h1>")
})


const port = process.env.PORT || 5000
app.listen(port, () => {
    log(`Listening on port ${port}...`)
})