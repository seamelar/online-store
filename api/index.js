require('dotenv').config()

const express = require('express');
const sequelize = require('./db')
const PORT = process.env.PORT || 4444;
const app = express();
/*const models = require('./models/models')*/
const cors = require('cors');

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({ messge:'WOW' })
});

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    }
    catch (e) {
        console.log(e);
    }
}

start();