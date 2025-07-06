// On student-list.html, retrieve the stored data
var storedFormData = localStorage.getItem("formData");

// Check if data exists before using it
if (storedFormData) {
    var formData = JSON.parse(storedFormData);
    // Now you can use formData to populate the form or do other operations
}
