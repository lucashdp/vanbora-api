const ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {
    //----------GET----------------------------//
    app.get('/v1/public/rides', (req, res) => {
        db.collection('rides')
            .find()
            .toArray((err, items) => {
                if (err) {
                    res.send({ 'error': 'An error has occurred' });
                } else {
                    res.send(items);
                }
            });
    });
    app.get('/v1/public/rides/:rideId', (req, res) => {
        const id = req.params.rideId;
        const details = { '_id': new ObjectID(id) };
        db.collection('rides').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });

    //----------PUT----------------------------//
    app.put('/v1/public/rides/:rideId', (req, res) => {
        const id = req.params.rideId;
        const details = { '_id': new ObjectID(id) };
        const ride = req.body.ride;
        db.collection('rides').update(details, ride, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });

    //----------POST---------------------------//
    app.post('/v1/public/rides', (req, res) => {
        const newride = req.body.ride;

        db.collection('rides').insert(newride, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    //----------DELETE-------------------------//
    app.delete('/v1/public/rides/:rideId', (req, res) => {
        const id = req.params.rideId;
        const details = { '_id': new ObjectID(id) };
        db.collection('rides').remove(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send('ride ' + id + ' deleted!');
            }
        });
    });
};