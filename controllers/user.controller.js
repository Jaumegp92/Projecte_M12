exports.allAccess = (req, res) => {
    res.status(200).send("Contingut public.");
  };
  exports.userBoard = (req, res) => {
    res.status(200).send("Contingut d'usuari");
  };
  exports.adminBoard = (req, res) => {
    res.status(200).send("Contingut administrador");
  };
  