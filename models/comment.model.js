const mongoose = require("mongoose");
let Comment = mongoose.model(
    "Comment",
    new mongoose.Schema({

        comment: [
            {
                comment: String,
                commentator: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User"
                }

            }
        ]

    }).method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
      })
);

module.exports = Comment;