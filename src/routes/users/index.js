const {Router}= require('express')
const{
    createAnonUser,
    getUserById,
    getUserByUsername
}=require('../../controllers/user')

const route=Router();

route.get('/:id',async(req,res)=>{
    let user;
    if(isNaN(parseInt(req.param.id))){
         user =await getUserByUsername(req.param.id);
     }
     else{
         user= await getUserById(req.param.id);
     }

if(user){
    res.status(200).send(user);
}
else{
    res.status(404).send({
        error:'No such User Found'
        
    })
}
})


module.exports={
    usersRoute:route
}