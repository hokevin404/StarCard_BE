import { validationResult } from "express-validator";

export const handleValidationErrors = (req, res, next) => {
    // Validation of request
    const errors = validationResult(req);

    // If errors present, return 400 status
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });

    next();
}