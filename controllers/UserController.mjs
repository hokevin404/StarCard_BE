import User from '../models/Users.mjs';

const UserController = {
    createUser: async (req, res) => {
        const {fname, lname, username, email} = req.body;
        try {
            const newUser = await User.create({fname, lname, username, email});
            res.status(201).json({newUser});
        } catch (error) {
            res.status(400).json({error: error.message});
        }
    }

}

export default UserController;