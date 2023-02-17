const http = require('http');
const fs = require('fs')
const path = require('path')
const hostname='localhost'
const port =3000


//page content
const styleSheet =fs.readFileSync(path.join(__dirname,'style.css'),'utf8')
const indexPage = fs.readFileSync(path.join(__dirname,'index.html'),'utf8')
const aboutPage = fs.readFileSync(path.join(__dirname,'about.html'),'utf8')
const contactPage = fs.readFileSync(path.join(__dirname,'contact-me.html'),'utf8')
const notFoundPage = fs.readFileSync(path.join(__dirname,'404.html'),'utf8')


//routes 
const server = http.createServer((req,res)=>{
    if(req.method==='GET'){
        if(req.url==='/'){
            res.writeHead(200,{'Content-Type':'text/html'})
             res.end(indexPage)
        }else if(req.url==='/about'){
           
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(aboutPage)
        }else if(req.url==='/contact-me'){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(contactPage)
        }else if(req.url==='/style.css'){
            res.writeHead(200,{"Content-Type":'text/css'})
            res.end(styleSheet)
        }else{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(notFoundPage)
        }
    }
})


//server listening code
server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}/`);
})
