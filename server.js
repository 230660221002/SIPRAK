require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  
  if (app._router?.stack) {
    console.log('\nRegistered routes:');
    app._router.stack.forEach((m) => {
      if (m.route) {
        console.log(
          `${Object.keys(m.route.methods).join(',').toUpperCase()} ${m.route.path}`
        );
      }
    });
  }
});
