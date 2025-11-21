const { body } = require('express-validator');


exports.registerValidator = [
body('name').notEmpty().withMessage('Name is required'),
body('email').isEmail().withMessage('Valid email is required'),
body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
];


exports.loginValidator = [
body('email').isEmail().withMessage('Valid email is required'),
body('password').exists().withMessage('Password is required'),
];