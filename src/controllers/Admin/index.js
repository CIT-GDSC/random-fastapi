import { newAdmin, findAdminById, findByEmail, findBySessionToken, fi } from "../../database/models/admin";
import expressAsyncHandler from "express-async-handler";
import { authentication, genarateSaltedString } from './../../utilities/index';


export const createAdmin = expressAsyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    const isExisting = await findByEmail(email);
    if (isExisting) {
        return res.sendStatus(400);
    }

    if (!username || !email || !password) {
        return res.sendStatus(400);
    }
    const salt = genarateSaltedString();
    const admin = await newAdmin({
        username,
        email,
        password: authentication(salt, password)
    });
    await admin.save();
    return res.sendStatus(200).json(admin);

});


export const signInAdmin = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password){
        res.sendStatus(400);
    }
    const admin = await findByEmail(email).select('+authentication.salt +authentication.password')
    if (!admin) {
        res.sendStatus(400);
    }
    const expectedHash = authentication(admin.authentication.salt, password);
    if (admin.authentication.password !== expectedHash) {
        return res.sendStatus(403);
    }

});
