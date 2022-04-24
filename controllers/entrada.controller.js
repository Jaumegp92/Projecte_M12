const db = require("../models");
const Entrada = db.entrada;
// Crear i guardar
exports.create = (req, res) => {

    //Validar
  if(!req.body.title) {
    res.status(400).send({ message: "El contingut no pot estar buit!" });
    return;
  }
  /*if(!req.body.body) {
    res.status(400).send({ message: "El contingut no pot estar buit!" });
    return;
  }
  if(!req.body.createdBy) {
    res.status(400).send({ message: "Es requereix un autor!" });
    return;
  }*/

  // crear
  const entrada = new Entrada({
    title: req.body.title,
    body: req.body.body,
    createdBy: req.body.createdBy,
  });
  // guardar
  entrada
    .save(entrada)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ha passat algun error."
      });
    });
  
};
// recuperar.
exports.findAll = (req, res) => {

  const title = req.query.title;
  let condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  Entrada.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ha passat algun error."
      });
    });
  
};
// trobar una entrada individual per id
exports.findOne = (req, res) => {

  const id = req.params.id;
  Entrada.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "No existeix l'entrada amb id " +id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error al recuperar l'entrada amb id= " +id });
    });
  
};
// actualitzar una entrada per id
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
              message: `No es pot actualitzar l'entrada amb id=${id}.`
            });
          } else res.send({ message: "Entrada actualitzada." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error actualitzant l'entrada amb id= "+id
          });
        });
  
};
// eliminar entrada per id
exports.delete = (req, res) => {

  const id = req.params.id;
  Entrada.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `No es pot eliminar l'entrada amb id=${id}.`
        });
      } else {
        res.send({
          message: "Eliminat correctament"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "No es pot eliminar la entrada amb id=" + id
      });
    });
  
};
// eliminar totes les entrades
exports.deleteAll = (req, res) => {

    Entrada.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Totes les entrades eliminades`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ha passat algun error."
      });
    });
  
};