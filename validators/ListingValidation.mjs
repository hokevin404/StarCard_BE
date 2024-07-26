import { checkSchema } from "express-validator";

export const listingValidation = checkSchema({
    userID: {
        isString: true,
        trim: true
    },
    title: {
        in: ['body'],
        isString: true,
        trim: true,
        isLength: {
            options: {
                min: 5,
                max: 150
            },
            errorMessage: 'Title must be between 5 and 150 characters'
        }
    }
})