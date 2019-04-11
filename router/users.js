const router = require('express').Router();
const users = require('./usersModel.js');

router.get('/', async (req, res)=>{
    const userList = await users.find();
    res.status(200).json({userList});
})

router.post('/', async (req, res)=>{
    const user =req.body;
    try{
        if(user.name && user.hobby){
            const newUser = await user.add(user);
            res.status(201).json(newUser);
        } else{
            res.status(400).json({message: "Please provide name and hobby of the user"})
        }
    }catch(err){
        res.status(500).json({message: 'here was an error trying to add a user'})
    }
})

router.delete('/:id', async(re,res)=>{
    try{
        const {id} = req.params;
        const delUser = await user.remove(id);
        if(!delUser || delUser < 1){
            res.status(404).json({message: "User doesn't exist to be removed"})
        } else{
            res.status(200).json(delUser);
        }
    }catch(err){
        res.status(500).json({message: "There was an error while trying to delete the user."});
    }
})


module.exports = router;
