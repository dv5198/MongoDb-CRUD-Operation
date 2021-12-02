const express= require('express');
const router=express.Router();
const {employee}=require('../models/employee');

//Get All Values

router.get('/api/employees',(req,res)=>{
    employee.find({},(err,data)=>{
        if(!err){res.send(data);}else{
            console.log(err);
        }
    });
});
//Inserting the values

router.post('/api/employees/add',(req, res)=>{
    const emp=new employee({
        name: req.body.name,
        email: req.body.email,
        salary:req.body.salary
    });
    emp.save((err,data)=>{
        res.status(200).json({code:200,message:'Employee Record Added Successfully',addemployee:data});
    });
});
//Get searched id
router.get('/api/employees/:id',(req,res)=>{
   employee.findById(req.params.id,(err,data)=>{
    if(!err){res.send(data);}else{
        console.log(err);
    }
   });
});

//Update Employee
router.put('/api/employees/edit/:id',(req,res)=>{
    employee.findOne(req.params.id,(err,data)=>{
        const emp={
            name: req.body.name,
            email: req.body.email,
            salary:req.body.salary
        }
        employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,data)=>{

            if(!err){
                res.status(200).json({code:200,message:'Employee Record Updated Successfully',updateemployee:data});
            }else{
                console.log(err);
            }
        });
        
    });
});

//Delete Employee Record
router.delete('/api/employees/delete/:id',(req,res)=>{
    employee.findByIdAndRemove(req.params.id,(err,data)=>{
        if(!err){
            res.status(200).json({code:200,message:'Employee Record Deleted Successfully',updateemployee:data});
        }else{
            console.log(err);
        }
    })
});
module.exports=router