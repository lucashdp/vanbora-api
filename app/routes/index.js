const usersRoutes = require('./users_routes');
const driversRoutes = require('./drivers_routes');
const ridesRoutes = require('./rides_routes');
const vehiclesRoutes = require('./vehicles_routes');
const placesRoutes = require('./places_routes');

module.exports = function (app, db) {
    usersRoutes(app, db);
    driversRoutes(app, db);
    ridesRoutes(app, db);
    vehiclesRoutes(app, db);
    pointsRoutes(app, db);
    placesRoutes(app);
};