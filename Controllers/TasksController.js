const Task = require('../models/task');

exports.index = (req, res) => {
    req.isAuthenticated();

    Task.find({
        author: req.session.userId
      })
    .populate('author')
    .then(tasks => {
        res.render('tasks/index', {
            tasks: tasks,
            title: 'To do List'
        });
    })
    .catch(err => {
        req.flash('error', `ERROR: ${err}`);
        res.redirect('/');
        console.log('error', `ERROR: ${err}`);
    });
};
exports.show = (req, res) => {
    req.isAuthenticated();

    Task.findOne({
        _id: req.params.id,
        author: req.session.userId
    })
    .then(task => {
        res.render('tasks/show',{
            task: task,
            title: task.title
        });
    })
    .catch(err => {
        req.flash('error', `ERROR: ${err}`);
        res.redirect('/');
    });
};
exports.new =(req, res) => {
    req.isAuthenticated();

    res.render('tasks/new', {
        title: 'New Task Post'
    });
}
exports.update =(req, res) => {
    req.isAuthenticated();

    Task.updateOne({
        _id: req.body.id,
        author: req.session.userId
    },req.body.task, {
        runValidators: true
    })
    .then(()=> {
        req.flash('success', 'The List was updated.');
        res.redirect(`/tasks/${req.body.id}`);
    })
    .catch(err => {
        req.flash('error', `ERROR: ${err}`);
        res.redirect(`/tasks/${req.body.id}/edit`);
    });
};

exports.create =(req, res) => {
    req.isAuthenticated();

    req.body.task.author = req.session.userId;
    Task.create(req.body.task)
    .then(() => {
        req.flash('success', 'New List was created successfully.');
        res.redirect('/tasks');
    })
    .catch(err => {
        req.flash('error', `ERROR: ${err}`);
        res.redirect('/tasks/new')
    });
}
exports.edit =(req, res) => {
    req.isAuthenticated();

    Task.findOne({
        _id: req.params.id,
        author: req.session.userId
    })
    .then(task => {
        res.render('tasks/edit',{
            task: task,
            title: task.title
        });
    })
    .catch(err => {
        req.flash('error', `ERROR: ${err}`);
        res.redirect('/');
    });
}
exports.destroy =(req, res) => {
    req.isAuthenticated();

    Task.deleteOne({
        _id: req.body.id,
        author: req.session.userId
    })
    .then(() => {
        req.flash('success', 'The List was deleted.');
        res.redirect('/tasks')
    })
    .catch(err => {
        req.flash('error', `ERROR: ${err}`);
        res.redirect(`/tasks`);
    });
}