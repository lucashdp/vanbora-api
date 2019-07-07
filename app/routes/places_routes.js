const GoogleService = require('../utils/google_service');
const googleService = GoogleService();

module.exports = function (app) {
    //----------GET----------------------------//
    app.get('/v1/public/places', (req, res) => {
        const searchText = req.query.searchText;

        return googleService.searchGoogleAdress(searchText)
            .then(function (data) {
                return data;
            })
            .catch(function (error) {
                return error
            });
    });
};