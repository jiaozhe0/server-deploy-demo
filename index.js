const http = require("http")
const fs = require("fs")

http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", 'text/html')
  res.end(fs.readFileSync("./index.html"))
}).listen(3000, () => {
  console.log("Server Running At #000")
})
