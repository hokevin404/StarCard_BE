import { checkSchema } from "express-validator";

export const loginValidation = checkSchema({
    username: {
        in: ['body'],
        isString: true,
        trim: true,
        notEmpty: {
            errorMessage: "Username requried"
        },
        isAlphanumeric: {
            errorMessage: 'Username must is alphanumeric'
        }
    },
    password: {
        in: ['body'],
        isString: true,
        trim: true,
        isLength: {
            options: { min: 8 },
            errorMessage: 'Password must be at least 8 characters long'
        }
    },
});