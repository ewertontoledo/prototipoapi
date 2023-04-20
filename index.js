
exports.handler = async (event) =>{

const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.get('/', (req, res) => {
   return res.json({titulo: "Protótipo API"});
});

app.listen(port, () => { console.log('Aplicação rodando na pora 8080: http://localhost:8080/"'); });
module.exports = app

};