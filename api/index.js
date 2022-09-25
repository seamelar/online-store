require('dotenv').config()

const express = require('express');
const sequelize = ('./db.js');
const PORT = process.env.PORT || 4444;
const app = express();


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, (err) => {
            if (err) {
                return console.log(err);
            }
            console.log('Nice');
        });
    }
    catch (e) {
        console.log(e);
    }
}


app.get('/', (req,res) => {
    res.send('Hell')
});

start();