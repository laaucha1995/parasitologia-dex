const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

// Add mysql database connection
const db = mysql.createPool({
  host: 'mysql_db', // the host name MYSQL_DATABASE: node_mysql
  user: 'root', // database user MYSQL_USER: MYSQL_USER
  password: 'dbpassword22root', // database user password MYSQL_PASSWORD: MYSQL_PASSWORD
  database: 'parasitologia' // database name MYSQL_HOST_IP: mysql_db
})

// Enable cors security headers
app.use(cors())

// add an express method to parse the POST method
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// home page
app.get('/', (req, res) => {
  res.send('API Parasitologia - OK')
});

// get all of the books in the database
app.get('/get', (req, res) => {
  const SelectQuery = " SELECT * FROM  parasitologia_db";
  db.query(SelectQuery, (err, result) => {
    res.send(result)
  })
})

// add a book to the database
app.post("/insert", (req, res) => {
  const phylumName = req.body.setphylumName;
  const ClaseName = req.body.setClase;
  const InsertQuery = "INSERT INTO parasitologia_db (phylum_name, clase_name) VALUES (?, ?)";
  db.query(InsertQuery, [phylumName, ClaseName], (err, result) => {
    console.log(result)
  })
})

// delete a book from the database
app.delete("/delete/:parasitoID", (req, res) => {
  const parasitoID = req.params.parasitoID;
  const DeleteQuery = "DELETE FROM parasitologia_db WHERE id = ?";
  db.query(DeleteQuery, parasitoID, (err, result) => {
    if (err) console.log(err);
  })
})

// update a book review
app.put("/update/:parasitoID", (req, res) => {
  const ClaseName = req.body.reviewUpdate;
  const parasitoID = req.params.parasitoID;
  const UpdateQuery = "UPDATE parasitologia_db SET clase_name = ? WHERE id = ?";
  db.query(UpdateQuery, [ClaseName, parasitoID], (err, result) => {
    if (err) console.log(err)
  })
})

app.listen('3001', () => { })