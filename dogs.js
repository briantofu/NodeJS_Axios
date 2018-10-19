const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.json());
let dogs = ['blacky', 'werpa'];

app.get('/', (req, res) => res.status(200).json({dogs: dogs}));
app.post('/', (req, res) => {
dogs.push(req.body.dogName);
res.status(200).json({status: `Added ${req.body.dogName}!`});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
