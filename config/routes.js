var mongoose = require('mongoose'), Task = mongoose.model('User');

module.exports = function Routes(app){
	app.get('/', function(req, res) { 
		Task.find(function(err, tasks){
			if(err){
				return console.error(err);
			}
			res.render('index', { title: 'hello', my_tasks: tasks}); });
		})
	
	app.post('/users/create', function(req, res){
		var a = new Task(req.body);
		a.save(function(err, a){
			console.log(err, a);
			res.redirect('/');
		});
	});
	app.post('/users/destroy', function(req, res){
		var task = req.body;
		console.log('i am here', task);
		Task.remove({ _id: req.body.id}, function(err){
			if(err){
				return console.error(err)
			}
		});
		res.redirect('/');
	});
};