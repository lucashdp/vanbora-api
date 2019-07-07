const usersRoutes = require('./users_routes');
const driversRoutes = require('./drivers_routes');
const ridesRoutes = require('./rides_routes');
const routesRoutes = require('./routes_routes');
const placesRoutes = require('./places_routes');

module.exports = function (app, db) {
    usersRoutes(app, db);
    driversRoutes(app, db);
    ridesRoutes(app, db);
    routesRoutes(app, db);
    placesRoutes(app);
};