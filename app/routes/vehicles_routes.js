const ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {
    //----------GET----------------------------//
    app.get('/v1/public/vehicles', (req, res) => {
        db.collection('vehicles')
            .find()
            .toArray((err, items) => {
                if (err) {
                    res.send({ 'error': 'An error has occurred' });
                } else {
                    res.send(items);
                }
            });
    });
    app.get('/v1/public/vehicles/:vehicleId', (req, res) => {
        const id = req.params.vehicleId;
        const details = { '_id': new ObjectID(id) };
        db.collection('vehicles').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });

    //----------PUT----------------------------//
    app.put('/v1/public/vehicles/:vehicleId', (req, res) => {
        const id = req.params.vehicleId;
        const details = { '_id': new ObjectID(id) };
        const vehicle = req.body.vehicle;
        db.collection('vehicles').update(details, vehicle, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });

    //----------POST---------------------------//
    app.post('/v1/public/vehicles', (req, res) => {
        const newvehicle = req.body.vehicle;

        db.collection('vehicles').insert(newvehicle, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    //----------DELETE-------------------------//
    app.delete('/v1/public/vehicles/:vehicleId', (req, res) => {
        const id = req.params.vehicleId;
        const details = { '_id': new ObjectID(id) };
        db.collection('vehicles').remove(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send('vehicle ' + id + ' deleted!');
            }
        });
    });
};