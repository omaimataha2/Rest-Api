const User = require('../models/User.js')

const createUser = async (req, res, next) => {
    const newUser = new User(req.body)

    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (error) { next(error) }
}


const suspendUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            { $set: {isSuspended: true} }, 
            { new: true }
        )
        res.status(201).json(updatedUser)
    } catch (error) { next(error) }
}


const unsuspendUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            { $set: {isSuspended: false} }, 
            { new: true }
        )
        res.status(201).json(updatedUser)
    } catch (error) { next(error) }
}


const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(201).json("User has been deleted!")
    } catch (error) { next(error) }
}


const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(201).json(user)
    } catch (error) { next(error) }
}


const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find()
        res.status(201).json(users)
    } catch (error) { next(error) }
}


module.exports ={createUser , getAllUsers , getUser , deleteUser , unsuspendUser , suspendUser}
