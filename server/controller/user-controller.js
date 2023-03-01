import User from "../model/user.js";

export const signupUser = async (request,response) => {
    try {
        const user = request.body;

        const newUser = new User();
        await newUser.save();
        return response.status(200).json({msg: 'signup successful'})
    } catch(err) {
        return response.status(200).json({msg: 'Error while signup the user'})
    }

}