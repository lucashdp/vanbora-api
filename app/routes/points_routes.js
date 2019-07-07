const ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {
    //----------GET----------------------------//
    app.get('/v1/public/points', (req, res) => {
        db.collection('points')
            .find()
            .toArray((err, items) => {
                if (err) {
                    res.send({ 'error': 'An error has occurred' });
                } else {
                    res.send(items);
                }
            });
    });
    app.get('/v1/public/points/:pointId', (req, res) => {
        const id = req.params.pointId;
        const details = { '_id': new ObjectID(id) };
        db.collection('points').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });

    //----------PUT----------------------------//
    app.put('/v1/public/points/:pointId', (req, res) => {
        const id = req.params.pointId;
        const details = { '_id': new ObjectID(id) };
        const point = req.body.point;
        db.collection('points').update(details, point, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });

    //----------POST---------------------------//
    app.post('/v1/public/points', (req, res) => {
        const newpoint = req.body.point;

        db.collection('points').insert(newpoint, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    //----------DELETE-------------------------//
    app.delete('/v1/public/points/:pointId', (req, res) => {
        const id = req.params.pointId;
        const details = { '_id': new ObjectID(id) };
        db.collection('points').remove(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send('point ' + id + ' deleted!');
            }
        });
    });
};