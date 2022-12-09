import { addEmployee } from "../services/employeeService.js";

export function processEmployee(req,res){

    try {
        console.log("main");
        addEmployee(req.body)
        res.json({massage:"employee added successfully"})
        
    } catch (error) {

        res.json({massage:error})
        
    }

}