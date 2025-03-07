document.getElementById('timeCardForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form input values
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const date = document.getElementById('date').value;
    const timeIn = document.getElementById('timeIn').value;
    const timeOut = document.getElementById('timeOut').value;

    // Create a new row for the table
    const table = document.getElementById('timeCardsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Insert cells for each piece of data
    newRow.insertCell(0).textContent = name;
    newRow.insertCell(1).textContent = contact;
    newRow.insertCell(2).textContent = date;
    newRow.insertCell(3).textContent = timeIn;
    newRow.insertCell(4).textContent = timeOut;

    // Clear form inputs after submission
    document.getElementById('timeCardForm').reset();
});
