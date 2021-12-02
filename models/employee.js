const mongoose = require('mongoose');

//Employee Schema Object
const employee=mongoose.model('Employee',{

    name:{
        type: 'string',
        required: true
    },
    email:{
        type: 'string',
        required: true
    },
    salary:{
        type: 'string',
        required: true
    }
});
module.exports={employee}