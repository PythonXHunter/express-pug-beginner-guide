const express = require('express');
const app = express();
const axios = require('axios');

app.set('view engine', 'pug');


const port = 3001;

app.get('/', async (req, res) => {
    const query = await axios.get('http://localhost:3000/results');
    res.render('index', { employees: query.data });
})

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
})