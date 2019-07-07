const ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {
    //----------GET----------------------------//
    app.get('/v1/public/drivers', (req, res) => {
        db.collection('drivers')
            .find()
            .toArray((err, items) => {
                if (err) {
                    res.send({ 'error': 'An error has occurred' });
                } else {
                    res.send(items);
                }
            });
    });
    app.get('/v1/public/drivers/:driverId', (req, res) => {
        const id = req.params.driverId;
        const details = { '_id': new ObjectID(id) };
        db.collection('drivers').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });

    //----------PUT----------------------------//
    app.put('/v1/public/drivers/:driverId', (req, res) => {
        const id = req.params.driverId;
        const details = { '_id': new ObjectID(id) };
        const driver = req.body.driver;
        db.collection('drivers').update(details, driver, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });

    //----------POST---------------------------//
    app.post('/v1/public/drivers', (req, res) => {
        const newdriver = req.body.driver;

        db.collection('drivers').insert(newdriver, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    //----------DELETE-------------------------//
    app.delete('/v1/public/drivers/:driverId', (req, res) => {
        const id = req.params.driverId;
        const details = { '_id': new ObjectID(id) };
        db.collection('drivers').remove(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send('driver ' + id + ' deleted!');
            }
        });
    });
};