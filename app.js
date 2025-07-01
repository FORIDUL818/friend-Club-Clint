class App {
    constructor() {
        this.express = require("express");
        this.cors = require("cors");
        this.mongoose = require("mongoose");
        this.dotenv = require("dotenv").config();
        this.app = this.express(); // Create only one express instance
    }

    // Middleware
    middleWare() {
        this.app.use(this.cors());
        this.app.use(this.express.json()); // Add this for JSON body parsing
    }

    // MongoDB Connection
    connectDb() {
        this.mongoose
            .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => console.log("✅ Database connected"))
            .catch((err) => console.log("❌ DB connection error:", err));
    }

    // Routes

     

  
    // errorHandle 
    ErorrHandle(){
       this.app.all("*splat",(req,res)=>{
        res.status(404).json({status:"not Found"})
       })
    }
    // errorHandle 

    // Server
    Server() {
        const port = process.env.PORT || 5000;
        this.app.listen(port, () => {
            console.log(`🚀 Server is running at http://localhost:${port}`);
        });
    }
}

// Run the app
const appData = new App();
appData.middleWare();
appData.connectDb(); // Register routes before starting the server
appData.Server();
appData.ErorrHandle()
