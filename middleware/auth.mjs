import jwt from 'jsonwebtoken';

export default (req, res, next) => {
    // Pull token from header
    const token = req.header('x-auth-token');

    // Return error if no token
    if(!token) {
        return res.status(401).json({errors: [{msg: 'No token, Access Denied'}]});
    }

    try {
        // Initialize variable with JWT token validity
        const decoded = jwt.verify(token, process.env.tokenSecret);

        // Initialize variable with user from token
        req.user = decoded.user;

        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({errors: [{msg: 'Token is not valid'}]});
    }
}