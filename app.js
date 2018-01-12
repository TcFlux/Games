var express = require('express'),
    app = express();
    
app.set('view engine', 'ejs');
    
app.get('/', function(req, res){
    res.render('landing', {"title": "Simple Games"});
});

app.get('/tictactoe', function(req, res) {
   res.render('tictactoe', {"title": "Tic Tac Toe"});
});







app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The TicTacToe server has started!");
});
