import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
    propertyOwners: { type: String, required: true },
    isManaged: { type: Boolean, default: false },
    managingAgency: {type: String, default: null},
    propertyname: { type: String, required: true, },
    propertyLocation: { type: String, required: true },
    propertyType: { type: String, required: true },
    propertyMedia: {type: String, required: true},
    propertyPrice: { type: String, required: true },
    bedrooms: { type: String, required: true },
    bathrooms: { type: String, required: true, },
    propertyDescription: {type: String, required: true}
});


export const Property = mongoose.model("Property", propertySchema);
export const defineproperty = (id, values) => new Property({ ...values, _id: id }).save().then((data) => data.toObject()).catch((err) => console.log(err));
export const getproperty = (id) => Property.findById(id).then((data) => data.toObject()).catch((err) => console.log(err));
export const getproperties = () => Property.find().then((data) => data.map((item) => item.toObject())).catch((err) => console.log(err));
export const updateproperty = (id, values) => Property.findByIdAndUpdate(id, values).then((data) => data.toObject()).catch((err) => console.log(err));
export const deleteproperty = (id) => Property.findByIdAndDelete(id).then((data) => data.toObject()).catch((err) => console.log(err));
export const deleteproperties = () => Property.deleteMany().then((data) => data.map((item) => item.toObject())).catch((err) => console.log(err));
