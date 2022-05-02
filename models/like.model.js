const mongoose = require("mongoose");
let Like = mongoose.model(
    "Like",
    new mongoose.Schema({

        like: 
            {
                value: { type: Number, default: 0},
                likedBy: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User"
                }

            }
        
    }).method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
      })
);

module.exports = Like;