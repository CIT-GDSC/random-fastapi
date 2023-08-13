import mongoose from "mongoose";



const adminSchema = mongoose.Schema({
    username: {
        required: true,
        type: String,
        default: 'Admin1',
    },
    email: {
        type: String,
        required: true,
    },
    authentication: {
        salt: { type: String, select: false, required: true },
        password: { type: String, select: false, required: true },
        sessionToken: { type: String, select: false, required: true }
    }
});


export const adminModel = new mongoose.model('Admin', adminSchema)

//define functions
export const newAdmin = (values) => new adminModel(values).save().then((admin) => admin.toObject());
export const findAdminById = (id) => adminModel.findById(id);
export const findBySessionToken = (token) => adminModel.findOne(token);
export const findByEmail = (email) => adminModel.findOne(email);
export const updateAdminById = (id, values) => adminModel.findByIdAndUpdate(id, values);
export const deleteAdminById = (id) => adminModel.findByIdAndDelete(id);
export const getAdmins = () => adminModel.find();

