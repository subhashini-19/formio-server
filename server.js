
const express = require('express')
const path = require('path');
var cors = require('cors')
const bodyParser = require('body-parser');
const app = express()
const port = 5000
app.use('/cdn', express.static(path.join(__dirname, '/node_modules/formiojs/dist/')));
app.use('/dependency', express.static(path.join(__dirname, '/dependency')));

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '/public')));
app.use(cors())

app.get('/form/12345', function (req, res) {
  let resp = '{ "components": [ { "label": "First Name", "type": "textfield", "key": "firstName", "input": true, "tableView": true }, { "label": "Last Name", "type": "textfield", "key": "lastName", "input": true, "tableView": true }, { "type": "button", "label": "Submit", "key": "submit", "disableOnInvalid": true, "input": true, "tableView": false } ] }';
  resp = JSON.parse(resp);
  res.send(resp);
});

app.post('/form/12345/submission', function (req, res) {
 console.log(req.body);
 res.send(req.body);
})

app.listen(port, () => {
console.log(`App listening at http://localhost:${port}`)
})
