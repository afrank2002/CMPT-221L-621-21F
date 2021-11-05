let express = require('express');
let app = express();
app.set('view engine', 'ejs');

let port = 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.render('index');
});

app.post('/login', function (req, res) {
    console.log(req.body.login);
    res.redirect('/');
});

app.get("/signup", function(req, res) {
    res.render('login');
});

app.post("/signup", function(req, res) {
    console.log(req.body.signup);
    res.redirect('/');
});
app.listen(port, function() {
    console.log("Server running on localhost:5000");
});