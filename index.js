const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect to database
connectDB();

app.use(express.json({ extended: false }));

//Define Routes

app.use('/', require('./routes/main'));
app.use('/api/url', require('./routes/url'));

const PORT = 5000;

app.listen(PORT, async function () {
    try {
      console.log(`listening on port ${PORT}`);
    } catch (err) {
      console.error(err.message);
    }
  });