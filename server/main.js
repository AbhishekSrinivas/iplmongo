const express = require('express');
const path = require('path');
const stats = require(path.resolve('index'));
const app = express();
var cors = require('cors');

app.use(express.static(path.resolve('./')));

app.use(cors())
app.use(express.static('../Client'))

app.get('/matches', async function (req, res) {
    const matchesd = await stats.matchesPerYear('matches1');
    res.send(matchesd);
});

app.get('/economy', async function (req, res) {
    const matchesd = await stats.economy('matches1', 'matches', 2016);
    res.send(matchesd);
});

app.get('/extraruns', async function (req, res) {
    const matchesd = await stats.extraRuns('matches1', 'matches', 2015);
    res.send(matchesd);
});

app.get('/matcheswon', async function (req, res) {
    const matchesd = await stats.matchesWon('matches1');
    res.send(matchesd);
});

app.get('/topscorer', async function (req, res) {
    const matchesd = await stats.topScore('matches1', 'matches', 2017);
    res.send(matchesd);
})
app.listen(5000);