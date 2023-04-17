const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

app.get('/', (req, res) => {
   res.send('Protótipo API');
});

app.listen(port, () => { console.log('Aplicação rodando na pora 8080: http://localhost:8080/"'); });
module.exports = app