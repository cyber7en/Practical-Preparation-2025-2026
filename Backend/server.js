const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();

const port = process.env.PORT;

// MIDDLEWARE
app.use(cors());
app.use(express.json());


// MYSQL CONNECTION
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.log("❌ Database Connection Failed:", err);
  } else {
    console.log("✅ MySQL Connected Successfully");
  }
});



// INSERT DATA
app.post("/adduser", (req, res) => {

  const { name, email, phone_number } = req.body;

  const sql =
    "INSERT INTO users(name, email, phone_number) VALUES(?,?,?)";

  db.query(sql, [name, email, phone_number], (err, result) => {

    if (err) {
      console.log("❌ User Not Added");
      res.json(err);
    } else {
      console.log("👍 User Added Successfully");
      res.json("👍 User Added Successfully");
    }

  });

});




// RETRIEVE DATA
app.get("/users", (req, res) => {

  const sql = "SELECT * FROM users";

  db.query(sql, (err, result) => {

    if (err) {
      res.json(err);
    } else {
      console.log("👍 Data Retrieved Successfully");
      res.json(result);
    }

  });

});





//UPDATE
app.put("/updateuser/:id", (req, res) => {

  const { id } = req.params;

  const { name, email, phone_number } = req.body;

  const sql =
    "UPDATE users SET name=?, email=?, phone_number=? WHERE id=?";

  db.query(
    sql,
    [name, email, phone_number, id],
    (err, result) => {

      if (err) {
        res.json(err);
      } else {
        res.json("User Updated Successfully");
      }

    }
  );

});





//DELETE
app.delete("/deleteuser/:id", (req, res) => {

  const { id } = req.params;

  const sql = "DELETE FROM users WHERE id=?";

  db.query(sql, [id], (err, result) => {

    if (err) {
      res.json(err);
    } else {
      res.json("User Deleted Successfully");
    }

  });

});




//UPDATE
app.put("/updateuser/:id", (req, res) => {

  const { id } = req.params;

  const { name, email, phone_number } = req.body;

  const sql =
    "UPDATE users SET name=?, email=?, phone_number=? WHERE id=?";

  db.query(
    sql,
    [name, email, phone_number, id],
    (err, result) => {

      if (err) {
        res.json(err);
      } else {
        res.json("✅ User Updated Successfully");
      }

    }
  );

});






//DELETE

app.delete("/deleteuser/:id", (req, res) => {

  const { id } = req.params;

  const sql = "DELETE FROM users WHERE id=?";

  db.query(sql, [id], (err, result) => {

    if (err) {
      res.json(err);
    } else {
      res.json("User Deleted Successfully");
    }

  });

});



// TEST ROUTE
app.get('/', (req, res) => {
  res.send('👌 Backend Connected Well!');
});




// SERVER
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});