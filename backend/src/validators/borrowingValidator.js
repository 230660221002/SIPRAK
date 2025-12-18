const { body } = require('express-validator');

exports.borrowingValidator = [
  body('title').notEmpty(),
  body('facility').notEmpty(),
  body('borrowDate').isISO8601(),
  body('returnDate').isISO8601()
];
