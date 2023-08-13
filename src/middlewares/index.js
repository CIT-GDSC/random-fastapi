import expressAsyncHandler from "express-async-handler";


const errorHandler = expressAsyncHandler(async (req, res, next, err) => {
    statusCode = statusCode ? statusCode : 500;
    
});
