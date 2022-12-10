const express = require('express')
const res = require('express/lib/response')
const app = express()

const port = 2222

app.get("/", (req, res) => {
    res.send("bafy...")
})

// This is the IPFS cid/bafy handler for the anon metrics API
app.get("/metrics/:cid", (req, res) => {
    res.send(`What CID do you want to lookup? ${req.params.cid}?
    `)
})

// dont do anything with this- its important
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

// HTTP => POST, GET, PUT/PATCH, 

// work more on the request and response