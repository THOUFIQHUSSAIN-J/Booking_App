import User from "../models/User.js"

export const updateUser = async(req, res, next) =>{
     try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updatedUser) //Server success.
    }catch(err){
        next(err); //Server error. Will be hanled by middleware section
    }
}

export const deleteUser = async(req, res, next) =>{
     try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted") //Server success.
    }catch(err){
        next(err); //Server error. Will be hanled by middleware section
    }
}

export const getUser = async(req, res, next) =>{
     try{
        const user = await User.findById(req.params.id)
        res.status(200).json(user) //Server success.
    }catch(err){
        next(err); //Server error. Will be hanled by middleware section
    }
}

export const getAllUser = async(req, res, next) =>{
    try{
        const users = await User.find()
        res.status(200).json(users) //Server success.
    }catch(err){
        next(err); //Server error. Will be hanled by middleware section
    }
}