import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username: { type: String, required: [true, 'please provide username'] },
    email: { type: String, required: [true, 'Email is required'] },
    authentication: {
        password: { required: [true, 'please provide password'], type: String, select: false },
        salt: { type: String, select: false },
        sessionToken: { type: String, select: false }
    }
});


export const userModel = mongoose.model('user', userSchema);

export const getUsers = () => userModel.find();
export const getUserByEmail =(email) => userModel.findOne({ email });
export const getUserBySessionToken = ( sessionToken) => userModel.findOne({
    'authentication.sessionToken': sessionToken,
});
export const getUserById = (id) => userModel.findById(id);
export const createUser = (values) => new userModel(values).save()
    .then((user)=> user.toObject());
export const deleteUserByID = (id) => userModel.findOneAndDelete({_id : id});
export const updateUserById = (id, values) => userModel.findByIdAndUpdate(id, values); 
