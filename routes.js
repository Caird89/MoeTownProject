const express = require('express');
const app = express();

const pagesRoutes = require('./routes/pages')
const tasksRoutes = require('./routes/tasks');
const authorsRoutes = require('./routes/authors');
const sessionsRoutes = require('./routes/sessions');

app.use('/', pagesRoutes);
app.use('/tasks', tasksRoutes);
app.use('/authors', authorsRoutes);
app.use('/', sessionsRoutes);

module.exports = app;