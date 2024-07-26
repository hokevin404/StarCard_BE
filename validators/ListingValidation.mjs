import { checkSchema } from "express-validator";

export const listingValidation = checkSchema({
    userID: {
        isString: true,
        trim: true
    }
})