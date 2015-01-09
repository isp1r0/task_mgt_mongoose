var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
	task: String,
	priority: String,
	deadline: String,
	created_at: { type: Date, default: Date.now },
	hidden: Boolean,
});
UserSchema.path('task').required(true, 'Task cannot be blank');
UserSchema.path('priority').required(true, 'Priority cannot be blank');
UserSchema.path('deadline').required(true, 'Deadline cannot be blank');
mongoose.model('User', UserSchema);

