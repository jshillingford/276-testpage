const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000 //set to port given in environment var or port 5000 if not found

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false
});
/*
const pool = new Pool({
  user: 'postgres',
  password: 'root',
  host: 'localhost',
  database: 'postgres',
  ssl: false
});*/

const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.post('/inputinfo', function(req, res){
  // request body info
  console.log(req.body);
  // validate user
  // respond
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index')) //get from root of app pages/index (the => represents a funciton)
app.get('/cool', (req, res) => res.send(cool()))
app.get('/times', (req, res) => res.send(showTimes()))
app.get('/db', async (req, res) => {
  try {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM student');
    const results = { 'results': (result) ? result.rows : null};
    res.render('pages/db', results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
})
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

showTimes = () => {
  let result = ''
  const times = process.env.TIMES || 5
  for (i = 0; i < times; i++) {
    result += i + ' '
  }
  return result;
}


//to add delete functionality:
//in html,  add form with button
// here, add app.post(/deleteuser) ... => ... res.redirect('/')
// then, app.get(/delete) beneath, or what he has in the file