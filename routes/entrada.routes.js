module.exports = app => {
    const entrada = require("../controllers/entrada.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", entrada.create);
    router.get("/", entrada.findAll);
    router.get("/:id", entrada.findOne);
    router.put("/:id", entrada.update);
    router.delete("/:id", entrada.delete);
    router.delete("/", entrada.deleteAll);
    app.use("/api/entrades", router);
    
  };