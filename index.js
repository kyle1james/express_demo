import express from 'express';
const app = express();
const port = 4000;
// serve up static files
app.use(express.static('public'));
// make those api calls
const fetch = require('node-fetch');
require('dotenv').config();


// callback!
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/mars/:sol/:camera', async (req, res) => {
  const apiKey = process.env.MARS_API_KEY;
  console.log(apiKey);
  console.log(req.params);
  const info = req.params.myparams;
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${info}&api_key=${apiKey}`;
  const resp = await fetch(url);
  const data = await resp.json();
  console.log(data);
  res.json(data);
});

app.listen(port, ()=> console.log('Running on port 4000'));

// send data from the client to server <> (10mins) set up an api call to nasa
// hide data from the client              (5-10mins)
// independent code time                  (forever)
// break time :)                          (5-10mins) +1
