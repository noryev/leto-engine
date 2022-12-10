const express = require('express')
const res = require('express/lib/response')
const app = express()

const port = 2222

app.get("/metrics", (req, res) => {
    res.send("bafy...")
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

// HTTP => POST, GET, PUT/PATCH, 

// work more on the request and response