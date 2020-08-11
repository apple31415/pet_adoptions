import express from "express"
import path from "path"
import logger from "morgan"
import bodyParser from "body-parser"
import hbsMiddleware from "express-handlebars"
import _ from "lodash"
import pg from 'pg'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.set("views", path.join(__dirname, "../views"))
app.engine(
  "hbs",
  hbsMiddleware({
    defaultLayout: "default",
    extname: ".hbs"
  })
)

app.set("view engine", "hbs")

app.use(logger("dev"))
app.use(express.json())

app.use(express.static(path.join(__dirname, "../public")))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// const pool = new pg.Pool({
//   connectionString: "postgres://postgres:password@127.0.0.1:5432/adoptions"
// })

const pool = new pg.Pool({
  user : 'postgres',
  host : '127.0.0.1',
  database : 'adoptions',
  password : 'postgres',
  port : '5432'
});

// Express routes
app.get('/', (req, res) => {
  res.redirect("/pets")
})

app.get('/pets', (req, res) => {
  res.render("home")
})

app.post("/api/v1/petadoptions/:id", (req, res) => {
  const petAdoption=req.body
  let errors = []
  let queryString = "INSTER INTO adoption_applications (name, phone_number, email, home_status, application_status, pet_id) VALUES ($1, $2, $3, $4, $5, $6)" 
  pool.connect()
    .then(client => {
      client.query(queryString, [petAdoptions.name, petAdoption.phone_number, petAdoption.email, petAdoption.home_status, petAdoptions.application_status, req.params.pet_id])
        .then(result => {
          client.release();
          res.redirect("/");
        })
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
})

app.get('/api/v1/pettypes', (req, res) => {
  let queryString= "SELECT * FROM pet_types"
  pool.query(queryString)
    .then(response => {
      res.json(response.rows)
    })
})

app.listen(3000, "0.0.0.0", () => {
  console.log("Server is listening on port 3000...")
})

export default app 
// module.exports = app
