// Admin Dashboard Functions

// Show/Hide sections
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Remove active class from all menu links
    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Show selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
    
    // Add active class to clicked menu link
    event.target.classList.add('active');
}

// Add Business Modal
function openAddBusinessModal() {
    const businessName = prompt('Enter business name:');
    if (!businessName) return;
    
    const category = prompt('Enter business category:');
    if (!category) return;
    
    const phone = prompt('Enter business phone number:');
    if (!phone) return;
    
    alert(`Business "${businessName}" has been added successfully!\n\nCategory: ${category}\nPhone: ${phone}\n\nNext: Upload photos and add services.`);
}

// Add Service Modal
function openAddServiceModal() {
    const serviceName = prompt('Enter service name:');
    if (!serviceName) return;
    
    const price = prompt('Enter service price (in KES):');
    if (!price) return;
    
    const duration = prompt('Enter service duration (e.g., 30 mins):');
    if (!duration) return;
    
    alert(`Service "${serviceName}" has been added successfully!\n\nPrice: KES ${price}\nDuration: ${duration}`);
}

// Initialize admin dashboard
document.addEventListener('DOMContentLoaded', function() {
    // Display admin username
    const adminUsername = sessionStorage.getItem('admin_username') || 'Admin';
    const adminUsernameElement = document.getElementById('adminUsername');
    if (adminUsernameElement) {
        adminUsernameElement.textContent = adminUsername;
    }
    
    // Initialize overview section as default
    const overviewSection = document.getElementById('overview');
    if (overviewSection) {
        overviewSection.style.display = 'block';
    }
});

// Client lockout function (payment tracking)
function lockClient(clientId, clientName) {
    const confirm = window.confirm(`Lock client "${clientName}" from making bookings?\n\nReason: Non-payment`);
    if (confirm) {
        alert(`Client "${clientName}" has been locked.\n\nThey will not be able to book services until payment is received.`);
    }
}

// Payment tracking functions
function recordPayment(clientId, amount) {
    alert(`Payment of KES ${amount} has been recorded for client ID: ${clientId}`);
}

function generatePaymentReport() {
    alert('Payment Report Generated\n\n' +
        'Total Setup Fees Collected: KES 0\n' +
        'Total Monthly Fees Collected: KES 0\n' +
        'Outstanding Payments: KES 0\n\n' +
        'Report exported as PDF');
}
