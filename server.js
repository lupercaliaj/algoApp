const express = require('express');
const app = express();
app.use(express.static("pub"));




const port = process.env.PORT || 5000
app.listen(port, () => {
    log(`Listening on port ${port}...`)
})