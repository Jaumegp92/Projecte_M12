const mongoose = require("mongoose");
let Entrada = mongoose.model(
    "Entrada",
    new mongoose.Schema({

       title: String,
       body: String,
       createdAt: {type: Date, default: Date.now() },
       comments: [
         {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment",
         default: null
        }
      ],
      like: {Type: Number, default:0},
        likedBy: [
          {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          default: null
        }
      ]
       
    }).method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
      })
);

module.exports = Entrada;