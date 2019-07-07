const ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {
    //----------GET----------------------------//
    app.get('/v1/public/routes', (req, res) => {
        db.collection('routes')
            .find()
            .toArray((err, items) => {
                if (err) {
                    res.send({ 'error': 'An error has occurred' });
                } else {
                    res.send(items);
                }
            });
    });
    app.get('/v1/public/routes/:routeId', (req, res) => {
        const id = req.params.routeId;
        const details = { '_id': new ObjectID(id) };
        db.collection('routes').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });

    //----------PUT----------------------------//
    app.put('/v1/public/routes/:routeId', (req, res) => {
        const id = req.params.routeId;
        const details = { '_id': new ObjectID(id) };
        const route = req.body.route;
        db.collection('routes').update(details, route, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });

    //----------POST---------------------------//
    app.post('/v1/public/routes', (req, res) => {
        const newroute = req.body.route;

        db.collection('routes').insert(newroute, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    //----------DELETE-------------------------//
    app.delete('/v1/public/routes/:routeId', (req, res) => {
        const id = req.params.routeId;
        const details = { '_id': new ObjectID(id) };
        db.collection('routes').remove(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send('route ' + id + ' deleted!');
            }
        });
    });
};