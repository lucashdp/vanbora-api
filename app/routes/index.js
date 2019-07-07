// routes/index.js
const usersRoutes = require('./users_routes');
const placesRoutes = require('./places_routes');
module.exports = function (app, db) {
    usersRoutes(app, db);
    placesRoutes(app);
};