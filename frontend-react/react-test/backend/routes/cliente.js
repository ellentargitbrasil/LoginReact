const router = require('express').Router();
// const { models } = require('mongoose');
const Cliente = require('../models/cliente.model');
const { model } = require('../models/cliente.model');

router.route('/').get((req, res )=>{
    Cliente.find()
    // transformando as tabelas em formato json e exibindo mensagem de erro caso o usuario esteja inserindo um campo vazio
    .then(cliente => res.json(cliente))
    .catch(err => res.status(400).json('Error: '+err));

});

router.route('/add').post((req, res) =>{
    const cnpj = req.body.cnpj;
    const razao_social = req.body.razao_social;
    const dia = Number(req.body.dia);
    const horario = req.body.horario;
    const usuarios =req.body.usuarios;

    const newCliente = new Cliente({
        cnpj,
        razao_social,
        dia,
        horario,
        usuarios
    });
    newCliente.save()
    .then(() => res.json('Cliente add'))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/:id').get((req, res) => {
    Cliente.findById(req.params.id)
      .then(cliente => res.json(cliente))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Cliente.findByIdAndDelete(req.params.id)
      .then(() => res.json('Cliente deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    Cliente.findById(req.params.id)
      .then(newCliente => {
        newCliente.cnpj= req.body.cnpj;
        newCliente.razao_social = req.body.razao_social;
        newCliente.dia= Number(req.body.dia);
        newCliente.horario = req.body.horario;
        newCliente.usuarios = req.body.usuarios;
  
        newCliente.save()
          .then(() => res.json('Cliente updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  

module.exports = router;