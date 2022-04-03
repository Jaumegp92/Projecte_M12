const mongoose = require("mongoose");
let Entrada = mongoose.model(
    "Entrada",
    new mongoose.Schema({

       title: String,
       description: String,
       body: String,
       createdBy: String,
       createdAt: {type: Date, default: Date.now()},
       likes: {type: Number, default: 0},
    }).method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
      })
);

module.exports = Entrada;


/*const mongoose = require('mongoose');
const schema = mongoose.Schema;
let entrada = new schema({
       title: String,
       description: String,
       body: String,
       createdBy: String,
       createdAt: {type: Date, default: Date.now()},
});
entrada.method('transform',function(){
    let obj = this.toObject();
    obj.id=obj._id;
    delete obj._id;
    return obj;
});
module.exports = mongoose.model('Entrada',entrada);*/


