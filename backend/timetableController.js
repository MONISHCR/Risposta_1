const connection = require('../config/database');

exports.getTimetable = (req, res) => {
    const { filter, value } = req.query;
    let query = 'SELECT * FROM timetable';

    if (filter && value) {
        query += ` WHERE ${filter} = ${connection.escape(value)}`;
    }

    connection.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

exports.addTimetableEntry = (req, res) => {
    const { class_id, teacher_id, subject_id, lesson, day, start_time, end_time } = req.body;
    const query = 'INSERT INTO timetable (class_id, teacher_id, subject_id, lesson, day, start_time, end_time) VALUES (?, ?, ?, ?, ?, ?, ?)';

    connection.query(query, [class_id, teacher_id, subject_id, lesson, day, start_time, end_time], (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId });
    });
};
