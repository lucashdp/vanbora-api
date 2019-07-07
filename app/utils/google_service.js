var rp = require('request-promise');

const GoogleService = {
    searchGoogleAdress
};

function searchGoogleAdress(searchText) {
    const google = {
        URL: 'https://maps.google.com/maps/api/place/findplacefromtext/json?input=',
        SECRET_ACCESS_KEY: 'AIzaSyAAqP3ZZ_WswZ2n7EJcON3PZe_6Gx7P5RY'
    }

    const urlAddress =
        `${google.URL}${searchText.split(' ', '%20')}&components=country:BR&key=${google.SECRET_ACCESS_KEY}`;

    const options = {
        method: 'GET',
        url: urlAddress
    };

    return rp(options)
        .then(function (data) {
            return data;
        })
        .catch(function (err) {
            return err;
        });
}

module.exports = function user() {
    return GoogleService;
};