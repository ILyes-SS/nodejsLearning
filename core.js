import fs from "fs/promises"
import path from "path"
import url from 'url'

// const data = fs.readFileSync("./hello.txt", "utf-8")
// console.log(data)

// const data = fs.readFile("./hello.txt", "utf-8", (error, data)=>{
//     if(error) console.log(error)
//     console.log(data)
// })

// fs.readFile("./hello.txt", "utf-8")
// .then((data)=> console.log(data))
// .catch((error)=> console.log(error))

// const readFile = async ()=>{
//  try {
//     const data = await fs.readFile("./hello.txt","utf-8")
//     await fs.writeFile("./new.txt", data, "utf-8")
//     await fs.appendFile("./new.txt", "\nappended", "utf-8")
//     const newFile = await fs.readFile("./new.txt","utf-8")

//     console.log(newFile)
//  } catch (error) {
    
//  }
// }
// readFile()


// const filePath = "./dir/hello.txt"

// console.log(path.parse(filePath))


const google = "https://www.google.com/search?q=hello+world"
const urlObj = new URL(google)

console.log(url.format(urlObj))

