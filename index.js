//console.log("Hello, World!");
require('dotenv').config()
const express = require ('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/ayush',(req ,res )=>{
    res.send('Keep going !!! Neeed to finsih this playlist ASAP')
})

app.get ('/login', (req ,res) =>{
    res.send('<h1> Bhai lage raho sikh jaoge is baar ayush </h1>')
})

app.get('/chai', (req, res)=>{
    res.send('chai aur code ki backend playlist ki ye 2nd video h ')
})
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
console.log(`Hello ${process.env.PORT}`) 