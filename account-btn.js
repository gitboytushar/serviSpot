document.addEventListener('DOMContentLoaded', function () {
    var accountLink = document.getElementById('accountLink');
    var accountDropdown = document.getElementById('accountDropdown');

    accountLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        accountDropdown.classList.toggle('active'); // Toggle the 'active' class
    });

    // Close the dropdown when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!event.target.matches('#accountLink') && !event.target.closest('.dropdown-menu')) {
            accountDropdown.classList.remove('active');
        }
    });
});
