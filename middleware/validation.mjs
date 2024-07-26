import { checkSchema, checkschema, validationResult } from 'express-validator';

export const userValidationSchema = checkSchema({
    fname: {
        in: ['body'], // specify request location
        isString: true, // check value is string
        trim: true, // remove whitespaces
        notEmpty: {
            errorMessage: 'First name is required'
        }
    },
    lname: {
        in: ['body'],
        isString: true,
        trim: true,
        notEmpty: {
            errorMessage: 'Last name is required'
        }
    },
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
    }
})