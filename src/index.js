const express = require('express');
const bodyParser = require('body-parser')
const productRoutes = require('../src/router/Productrouter')
const orderroutes = require('../src/router/orderRoute')
const app = express();
const PORT = 3000;

app.use('/products', productRoutes);
app.use('/order', orderroutes)
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('<h2>Hello</h2>')
});

app.listen(PORT, () =>{
    console.log("API is listining on port ", PORT)
} )