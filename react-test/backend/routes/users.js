const router = require('express').Router();
let User = require('../models/user.model');
router.route('/').get((req, res )=>{
    User.find()
    // transformando as tabelas em formato json e exibindo mensagem de erro caso o usuario esteja inserindo um campo vazio
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: '+err));

});

router.route('/add').post((req, res) =>{
    const cnpj = req.body.cnpj;
    const newUser = new User({cnpj});

    newUser.save()
    .then(()=> res.json('Cliente ok!'))
    .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;