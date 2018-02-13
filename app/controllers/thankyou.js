
exports.render = function (req, res) {
    //make a reference to the session object
    var session = req.session;
    //store the username in session object
    session.username = req.body.username;
    res.render('thankyou', {
        title: 'thankyou'
    });  
    //res.end('done');
    
    
};