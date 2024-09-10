const { check, validationResult } = require('express-validator');

const validateJobInput = [
  check('title').not().isEmpty().withMessage('Title is required'),
  check('department').not().isEmpty().withMessage('Department is required'),
  check('description').not().isEmpty().withMessage('Description is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { validateJobInput };
