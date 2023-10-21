const controladorIndex = {
    home: function(req,res){
        res.render('home');
    },
    franco: function(req,res){
        res.render('franco')
    },
    rocio: function(req,res){
        res.render('rocio')
    },
    alexis: function(req,res){
        res.render('alexis')
    },
    ariel: function(req,res){
        res.render('ariel')
    }
}



module.exports = controladorIndex;