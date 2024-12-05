const express = require('express');
var app = express();

app.get('/API/:code', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    var infos = { name: 'Express', email: 'malek_emsi@yahoo.fr', code: req.params.code };
    res.end(JSON.stringify(infos));
});

app.listen(3000, () => {
    console.log('Server Started ...');
});
