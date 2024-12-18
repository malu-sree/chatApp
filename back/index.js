const express= require("express");
const chats = require("./data/data");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors"); 
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");


dotenv.config();
connectDB();
const app=express();
app.use(cors())


app.use(express.json()); // to accept json data

app.use('/uploads', express.static('uploads')); // Serve uploaded files
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);


app.get("/api/chats",(req,res)=>{
    res.send(chats)
})


app.listen(5000,console.log("server started on port 5000"))