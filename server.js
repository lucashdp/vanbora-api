// server.js
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./app/config/db');
const routes = require('./app/routes');
const app = express();
const cookieParser = require('cookie-parser');
const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err)
    database.db("vanbora");
    routes(app, database);
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
});
