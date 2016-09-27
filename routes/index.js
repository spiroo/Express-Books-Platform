var page = require('./page');

module.exports = function (app) {
    app.get('/', page.index);
    app.get('/user', page.user);
};
