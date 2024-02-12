const { connect, connection } = require('mongoose');

// Replace '<YOUR_CONNECTION_STRING>' with your actual connection string
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/socialDB';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;