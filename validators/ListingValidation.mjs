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
    },
    price: {
        in: ['body'],
        isNumeric: true,
        isFloat: {
            options: {min: 0},
            errorMessage: 'Price must be a positive number'
        }
    },
    condition: {
        in: ['body'],
        isIn: {
            options: [['New', 'Like New','Very Good','Good','Not Good', "Damaged"]],
            errorMessage: 'Condition must be one of the following: New, Like New, Very Good, Good, Not Good, or Damaged'
        },
        notEmpty: {
            errorMessage: 'Condition is required'
        }
        
    },
    description: {
        optional: true,
        trim: true,
        isLength: {
            options: { max: 250 },
            errorMessage: 'Description must be less than 250 characters'
        }
    }
})