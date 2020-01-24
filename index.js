const express = require('express')
// import model here

const server = express()
const port = process.env.PORT || 5000

server.use(express.json())

// welcome route
server.get('/', (req, res) => {
    return null;
})

server.use((err, req, res, next) => {
    console.log(`Err:`, err)
    res.status(500).json({ message: `Something went wrong`})
})

if(!module.parent) {
    server.listen(port, () => {
        console.log(`Server up at http://localhost:${port}`)
    })
}

module.exports = server