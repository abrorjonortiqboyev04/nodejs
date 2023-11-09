const http=require('http')
const fs=require('fs')
const path=require('path')
const ar=[]
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        fs.readFile(path.join(__dirname,'books.json'),'utf8',(er,data)=>{
            if(er) throw er
            res.end(data)
        })
    }else if(req.url==='/id'){
        res.end(`
        <html>
            <head>
            <title>Sahifa</title>
            </head>
            <body>
             <from action="/message" method="POST">
             <p>Title: </p>
             <input type="text" name="message">
             <p>Author: </p>
             <input type="text" name="message">
             <button>Send</button>
             </from>            
            </body>
        </html>
        `)
    }
})

server.listen(3001,()=>{
    console.log("Server runnig on port: 3001")
})

