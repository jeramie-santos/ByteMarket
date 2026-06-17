const express = require('express');
const app = express();
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
require('dotenv').config();

app.use(cors());
app.use(express());

app.get('/ping', (req, res) => {
  res.status(200).send('Server is awake!');
});

app.use('/', productRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running in PORT ${PORT}`);
})