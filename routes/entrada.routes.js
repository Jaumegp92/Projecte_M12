module.exports = app => {
    const entrades = require("../controllers/entrada.controller.js");
    var router = require("express").Router();
    router.post("/", entrades.create);
    router.get("/", entrades.findAll);
    router.get("/:id", entrades.findOne);
    router.put("/:id", entrades.update);
    router.delete("/:id", entrades.delete);
    router.delete("/", entrades.deleteAll);
    app.use('/api/entrades', router);
  };