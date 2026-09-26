import http from "http"
import path from "path"
import url from "url"
import fs from "fs/promises"

//these two variables exist inside CommonJS but we need to perform the following woraround to make it work on ESM 
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(__dirname)
console.log(__filename)

const PORT = 8000
const server = http.createServer(async (req, res)=>{

    try {
        if(req.method == "GET"){
            let filepath
            if(req.url == "/"){
                filepath = path.join(__dirname, "public", "home.html")
            }
            if(req.url == "/about"){
                filepath = path.join(__dirname, "public", "about.html")
            }
            else{
                res.writeHead(500, {"content-type":"text/html"})
                res.end('not found')        
            }
            const content = await fs.readFile(filepath)
            res.writeHead(200, {"content-type":"text/html"})
            res.end(content)

        }
        else{
            throw new Error("An error occured")
        }
        
    } catch (error) {
        res.writeHead(500, {"content-type":"text/html"})
        res.end('Error message')
    }

// this serves as a simpe router

// try {
//     if(req.method == "GET"){
//         if(req.url == "/"){
//             res.writeHead(200, {"content-type":"text/html"})
//             res.end("<h1>Homepage</h1>")
//         }
//         if(req.url == "/about"){
//             res.writeHead(200, {"content-type":"text/html"})
//             res.end("<h1>About page</h1>")
//         }
//         else{
//                 res.writeHead(404, {"content-type":"text/html"})
//                 res.end("<h1>Not found</h1>")
            
//         }
//     }
//     else{
//         throw new Error("An error occured")
//     }
    
// } catch (error) {
//     res.writeHead(500, {"content-type":"text/html"})
//     res.end('Error message')
// }




    // res.setHeader("Content-Type", "text/plain")
    // res.write("Hello world")
    // res.end()

    // res.end("Hello World 2")

    // res.writeHead(400, {"content-type": "application/json"})
    // res.end(JSON.stringify({message: "Hello world"}))
})


server.listen(PORT, ()=>{
    console.log("listening on port " + PORT)
})