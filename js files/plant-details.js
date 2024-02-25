// Plant details functionality
document.addEventListener('DOMContentLoaded', function() {
    const PLANT_DETAILS_URL = 'https://perenual.com/api/species-list?key=sk-u1HU65db614cf00c44355';

    function fetchPlantDetails(plantId) {
        // Fetch plant details from the server based on plantId
        // Implement logic to fetch plant details
    }

    // Add logic to render plant details
    // ...

    // Fetch plant details when plant details page is loaded
    if (window.location.pathname === '/plant-details.html') {
        const plantId = extractPlantIdFromURL(); // Implement this function
        fetchPlantDetails(plantId);
    }
});
