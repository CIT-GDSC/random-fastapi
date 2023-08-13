import mongoose from "mongoose";



const clientSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    phone: { type: String, required: true },
    properties: [{ type: mongoose.Schema.Types.ObjectId, ref: "Property" }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    email: { type: String, required: true },
    authentication: {
        password: { type: String, required: true },
        token: { type: String, required: true },
        salt : { type: String, required: true }
    }
});


export default mongoose.model("Client", clientSchema);
export const getClients = () => userModel.find();
export const getClientsByEmail =(email) => userModel.findOne({ email });
export const getClientsBySessionToken = ( sessionToken) => userModel.findOne({
    'authentication.sessionToken': sessionToken,
});
export const getClientById = (id) => userModel.findById(id);
export const createClient = (values) => new userModel(values).save()
    .then((user)=> user.toObject());
export const deleteClientByID = (id) => userModel.findOneAndDelete({_id : id});
export const updateClientById = (id, values) => userModel.findByIdAndUpdate(id, values); 
