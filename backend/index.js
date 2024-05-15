const express = require('express');
const bodyParser = require('body-parser');
const timetableController = require('./controllers/timetableController');

const app = express();
app.use(bodyParser.json());

app.get('/timetable', timetableController.getTimetable);
app.post('/timetable', timetableController.addTimetableEntry);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
