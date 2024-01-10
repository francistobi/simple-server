const http = require("http")
const { dirname } = require("path")

const server = http.createServer((req,res) => {
    res.end("hello form the server")
    console.log(req.url)
    console.log(req.method)
    if(req.url === "/"){
        res.write("hello world")
        res.end()
    }else if(req.url === "/hello"){
        res.write("hello altschoolers")
        res.end()
    }
    
})
server.listen(3000 , ()=> {
    console.log("listening for port 3000")
})
console.log(__dirname)
console.log(__filename)