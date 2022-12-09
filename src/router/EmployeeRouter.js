import { processEmployee } from "../controller/employeeControll.js";
import express from "express";
let MainRouter = express.Router()
MainRouter.post('./employee',processEmployee)
export default MainRouter ; 