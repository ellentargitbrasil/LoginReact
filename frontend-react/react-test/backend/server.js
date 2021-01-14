const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true } );
const connection = mongoose.connection;

connection.once('open', ()=> {
    console.log('FOI');
})

const clienteRouter = require('./routes/cliente');
const usersRouter = require('./routes/users');

app.use('/cliente', clienteRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`está rodando na porta ${port}`);
});
// mongodb+srv: '//dbTesteFree:<mother4278@cluster0.oceqg.gcp.mongodb.net/<dbTesteFree>?retryWrites=true&w=majority';