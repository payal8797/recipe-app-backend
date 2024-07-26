const { check, validationResult } = require('express-validator');

exports.registerValidation = [
    check('username', 'Username is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('confirmPassword', 'Confirm password is required').not().isEmpty()
];

exports.loginValidation = [
    check('username', 'Username is required').not().isEmpty(),
    check('password', 'Password is required').exists()
];

exports.validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
