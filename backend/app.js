const express = require('express');
const mongoose = require('mongoose');

const sauceRoutes = require('./routes/sauce');
const userRoutes = require("./routes/user");

const app = express();

mongoose.connect('mongodb+srv://yanis:yanis@cluster0.nu5lj.mongodb.net/piiquante?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
   next();
 });

app.use('/api/sauces', sauceRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;