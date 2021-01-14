const express = require('express')
const app=express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)



const password="12345"


app.use(express.static("public"))


app.get("/",(req,res)=>{

    res.sendFile(__dirname+"/index.html")

})

app.get("/sender",(req,res)=>{

    res.sendFile(__dirname+"/notification-sender.html")

})

io.on("connection",(socket)=>{

    socket.on("disconnect",()=>{
        console.log("çıktı")
    })

    socket.on("notification",(json)=>{
        if(json.password===password){
            io.emit("notification",json)
        }
    })
})





server.listen(3000)