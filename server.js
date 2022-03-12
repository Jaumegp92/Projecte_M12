const express = require("express");
const cors = require("cors");
const dbConfig = require("./config/db.config");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models");
const Role = db.role;

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connectat a MongoDB correctament.");
    initial();
  })
  .catch(err => {
    console.error("No s'ha pogut establir la connexió a MongoDB", err);
    process.exit();
  });

// ruta simple
app.get("/", (req, res) => {
  res.json({ message: "Aplicació del Jaume." });
});

// routes
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);

// port on escola les peticions
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`El servidor funciona a través del port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("Afegit 'user' a la col·lecció de rols");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("Afegit 'admin' a la col·lecció de rols");
      });
    }
  });
}