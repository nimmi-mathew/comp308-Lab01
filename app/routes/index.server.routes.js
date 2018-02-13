//This uses CommonJS module pattern to export a single module function.
//This function takes an express object as argument 
//Then it requires the index controller and uses its render() method
//as a middleware to GET requests made to the root path.

module.exports = function (app) {
    //load the controllers
    var index = require('../controllers/index');
    var feedback = require('../controllers/feedback');
    var thankyou = require('../controllers/thankyou');

    //handle the routing of get and post request
    app.get('/', index.render);
    app.get('/login', index.render);
    app.get('/feedback', feedback.render);
    app.post('/login', index.render);
    app.post('/feedback', thankyou.render);
    app.post('/', function (req, res) {
        index.render(req, res);  
    });

};
