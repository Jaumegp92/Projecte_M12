const mongoose = require("mongoose");
let Entrada = mongoose.model(
    "Entrada",
    new mongoose.Schema({

       title: String,
       body: String,
       createdBy: String,
       createdAt: {type: Date, default: Date.now() },
       likes: { type: Number, default: 0 },
       likedBy: Array,
       comments: [{
         comment: String,
         commentator: String
  }]
    }).method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
      })
);

module.exports = Entrada;