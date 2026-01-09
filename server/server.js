import express from "express";
import "dotenv/config";
import cors from "cors";
import http, { ClientRequest } from 'http';
import { connectDB } from "./lib/DB.js";
import userRouter from "./routes/routes.js";
import messageRouter from "./routes/messageRoutes.js";
import { Server } from "socket.io";
import { log } from "console";



// Create Express app and Http server
const app= express();
const server =http.createServer(app)

//Initialize  socket.io server
export const io = new Server(server,{
    cors:{origin:"*"}
})

// Store online user 
export const userSocketMap = {};

//socket.io connection handler
io.on('connection', (socket) =>{
    const userId =socket.handshake.query.userId;
    console.log("User Connected", userId);
    if(userId) userSocketMap[userId]= socket.id;

    //emit online users to all connected Client
    io.emit("getOnlineUsers",Object.keys(userSocketMap));

    socket.on("disconnect",()=>{
        console.log("User Disconnected", userId);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap))
        
    })
    
})

//Mideleware setup
 app.use(express.json({limit:"4mb"}));
 app.use(cors());

 //Routes Setup
app.use("/api/status",(req, res)=> res.send("Server is live"));
app.use("/api/auth", userRouter);
app.use("/api/messages",messageRouter);

// Connect to MOngoDB
await connectDB();

 const PORT = process.env.PORT || 5000;
 server.listen(PORT, ()=>console.log("server is running on PORT: "+PORT));
