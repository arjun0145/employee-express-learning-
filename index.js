import express  from "express";
import MainRouter from "./src/router/EmployeeRouter.js";
const app = express()
app.use(express.json())
app.use(MainRouter)

app.get('/',(req,res)=>{
    res.send("alok is good boy ")
})

app.listen(7200,()=>{
    console.log("7200 is running");
})