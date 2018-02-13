    
exports.render = function (req, res) {
    //read the username from body property of request object
    var email = req.body.email;
    //make a reference to the session object
    var session = req.session;
    //store username in session object
    session.email = email;
    console.log("In index function - User name = " + session.email);
    //check if session object contains the username
    if (session.email) {
        res.redirect('/feedback');
    }
    else {
        //display the ejs page
        res.render('index', {
            title: 'Login page'
        });  
    }

  
};