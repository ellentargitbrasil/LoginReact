const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const dotenv = require('dotenv')

const app = express();
const port = process.env.PORT || 5000;

dotenv.config()

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect('mongodb+srv://dbTesteFree:mother4278@cluster0.oceqg.gcp.mongodb.net/dbTesteFree?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true });


mongoose.connection.once('open', () => {

  console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/clientes');
const usersRouter = require('./routes/users');

app.use('/clientes', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
