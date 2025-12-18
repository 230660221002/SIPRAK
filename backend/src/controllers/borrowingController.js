const prisma = require('../config/prisma');

/**
 * CREATE Borrowing
 */
exports.create = async (req, res) => {
  const { borrowDate, returnDate, ...rest } = req.body;

  const data = await prisma.borrowing.create({
    data: {
      ...rest,
      borrowDate: borrowDate ? new Date(borrowDate) : undefined,
      returnDate: returnDate ? new Date(returnDate) : undefined,
      userId: req.user.id
    }
  });

  res.status(201).json({
    message: 'Borrowing created successfully',
    data
  });
};

/**
 * GET All Borrowings (by logged user)
 */
exports.findAll = async (req, res) => {
  const data = await prisma.borrowing.findMany({
    where: { userId: req.user.id }
  });

  res.json({
    message: 'Get all borrowings successfully',
    data
  });
};

/**
 * UPDATE Borrowing
 */
exports.update = async (req, res) => {
  const { borrowDate, returnDate, ...rest } = req.body;

  const data = await prisma.borrowing.update({
    where: { id: Number(req.params.id) },
    data: {
      ...rest,
      borrowDate: borrowDate ? new Date(borrowDate) : undefined,
      returnDate: returnDate ? new Date(returnDate) : undefined
    }
  });

  res.json({
    message: 'Borrowing updated successfully',
    data
  });
};

/**
 * DELETE Borrowing
 */
exports.delete = async (req, res) => {
  await prisma.borrowing.delete({
    where: { id: Number(req.params.id) }
  });

  res.json({
    message: 'Borrowing deleted successfully'
  });
};
