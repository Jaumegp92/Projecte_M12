const db = require("../models");
const Entrada = db.entrada;

/*==========
    CREAR
============ */

exports.create = (req, res) => {
    // validació
    if (!req.body.title) {
      res.status(400).send({ message: "Contingut no pot estar buit!!" });
      return;
    }
    if (!req.body.body) {
        res.status(400).send({ message: "Contingut no pot estar buit!" });
        return;
      }
    // crear
    const entrada = new Entrada({
      title: req.body.title,
      body: req.body.body,
      published: req.body.published ? req.body.published : false
    });
    // guardar a la base de dades
    entrada
      .save(entrada)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Error alhora de crear l'entrada."
        });
      });
  };

  /*=======================
    RECUPERAR BY TITLE
==========================*/

exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
    Entrada.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };

   /*=======================
    RECUPERAR BY ID
==========================*/

exports.findOne = (req, res) => {
    const id = req.params.id;
    Entrada.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Tutorial with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Tutorial with id=" + id });
      });
  };

  /*=============
     UPDATE 
================*/

exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "No pot estar buit!"
      });
    }
    const id = req.params.id;
    Entrada.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `No es pot actualitzar l'entrada amb id=${id}. Entrada no trobada!`
          });
        } else res.send({ message: "Entrada actualitzada correctament." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error actualitzant l'entrada amb id=" + id
        });
      });
  };

   /*=============
     DELETE BY ID 
================*/
exports.delete = (req, res) => {
    const id = req.params.id;
    Entrada.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `No es pot eliminar l'entrada amb =${id}. Entrada no trobada!`
          });
        } else {
          res.send({
            message: "Entrada eliminada correctament!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "no es pot eliminar l'entrada amb id=" + id
        });
      });
  };

     /*=============
     DELETE ALL 
================*/
exports.deleteAll = (req, res) => {
    Entrada.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Entrades eliminades correctament !`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Error."
        });
      });
  };
