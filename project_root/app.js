const { express, mongoose, bodyParser, bcrypt, dotenv } = require('./dependencies');
const connectDB = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.static('./src/public'));
app.use(express.json());

// routes


// Connect to MongoDB
connectDB()
  .then(() => {
    // Start the server once connected to the database
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  });
