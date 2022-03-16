const { User } = require('../models');

const userController = {

    // ALL USERS
    getAllUsers(req, res){
        User.find({})
            .populate({path:'friends', select:'-__v'})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    // USERS BY ID
    getUserById({params}, res) {
        User.findOne({_id: params.id})
            .then(dbUserData => {
                if(!dbUserData){
                    res.status(404).json({message: " No user found with this ID..."});
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    // ADD USER
    createUser({body}, res){
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err = res.status(400).json(err)) 
    },

    // UPDATE USER
    updateUser({params, body}, res){
        User.findOneAndUpdate({_id: params.id}, body, {new: true})
            .then(dbUserData => {
                if(!dbUserData) => {
                    res.status(404).json({message: 'No user can be updated because ID not found'});
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err))
    },

}