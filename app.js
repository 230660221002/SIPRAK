const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DEBUG: Log all requests
app.use((req, res, next) => {
  console.log('='.repeat(50));
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  console.log('='.repeat(50));
  next();
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'API is running',
    endpoints: {
      auth: '/api/auth',
      users: '/api/users',
      borrowings: '/api/borrowings'
    }
  });
});

// DEBUG: Try to load routes
console.log('Loading routes...');

try {
  const authRoutes = require('./src/routes/authRoutes');
  console.log('✓ authRoutes loaded');
  app.use('/api/auth', authRoutes);
  console.log('✓ authRoutes mounted at /api/auth');
} catch (err) {
  console.error('✗ Failed to load authRoutes:', err.message);
}

try {
  const userRoutes = require('./src/routes/userRoutes');
  console.log('✓ userRoutes loaded');
  app.use('/api/users', userRoutes);
  console.log('✓ userRoutes mounted at /api/users');
} catch (err) {
  console.error('✗ Failed to load userRoutes:', err.message);
}

try {
  const borrowingRoutes = require('./src/routes/borrowingRoutes');
  console.log('✓ borrowingRoutes loaded');
  app.use('/api/borrowings', borrowingRoutes);
  console.log('✓ borrowingRoutes mounted at /api/borrowings');
} catch (err) {
  console.error('✗ Failed to load borrowingRoutes:', err.message);
}

// 404 handler
app.use((req, res, next) => {
  console.log(`404 - Route not found: ${req.method} ${req.originalUrl}`);
  res.status(404).json({
    status: 'error',
    message: 'Route not found'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error handler triggered:', err);
  res.status(err.status || 500).json({
    status: 'error',
    message: err.message || 'Internal server error'
  });
});

module.exports = app;