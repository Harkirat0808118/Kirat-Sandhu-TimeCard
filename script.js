// Automatically set date and time on page load
window.onload = function() {
    // Set the current date in the date input field
    const dateInput = document.getElementById("date");
    const currentDate = new Date().toISOString().split("T")[0];
    dateInput.value = currentDate;

    // Set the current time in the inTime and outTime fields
    const timeInput = document.getElementById("inTime");
    const currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    timeInput.value = currentTime; // Set current time as inTime

    // Automatically set outTime to be 1 hour later than inTime
    const outTimeInput = document.getElementById("outTime");
    const currentTimeInMinutes = new Date().getMinutes();
    const currentTimeInHours = new Date().getHours();
    const outTime = new Date();
    outTime.setHours(currentTimeInHours + 1, currentTimeInMinutes);
    outTimeInput.value = outTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}); // Set outTime
};

// Handle form submission and display the time card details
document.getElementById("timeCardForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const inTime = document.getElementById("inTime").value;
    const outTime = document.getElementById("outTime").value;

    const cardDetails = `
        <strong>Name:</strong> ${name}<br>
        <strong>Date:</strong> ${date}<br>
        <strong>In Time:</strong> ${inTime}<br>
        <strong>Out Time:</strong> ${outTime}
    `;
    
    document.getElementById("cardDetails").innerHTML = cardDetails;
    document.getElementById("timeCardDisplay").style.display = "block";
});
