document.addEventListener('DOMContentLoaded', function () {
    const timetableForm = document.getElementById('timetable-form');
    const filterForm = document.getElementById('filter-form');

    if (timetableForm) {
        timetableForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(timetableForm);
            const data = Object.fromEntries(formData.entries());

            fetch('/timetable', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                alert('Timetable entry added!');
                timetableForm.reset();
            })
            .catch(error => console.error('Error:', error));
        });
    }

    if (filterForm) {
        filterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const filter = document.getElementById('filter').value;
            const value = document.getElementById('value').value;

            fetch(`/timetable?filter=${filter}&value=${value}`)
            .then(response => response.json())
            .then(data => {
                const resultsDiv = document.getElementById('results');
                resultsDiv.innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
            })
            .catch(error => console.error('Error:', error));
        });
    }
});
