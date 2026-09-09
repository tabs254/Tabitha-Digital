# Tabitha Digital - Business Automation System

## Overview
Tabitha Digital is a comprehensive automation system designed to manage beauty and service businesses. It provides an admin dashboard for business management, client booking capabilities, and payment tracking.

## Pricing
- **Setup Fee**: 15,000 KES
- **Monthly Fee**: 2,000 KES

## Features

### Admin Dashboard
- **Admin Authentication**: Secure login with password protection (not visible to public)
- **Business Management**: Add and manage multiple service businesses
- **Client Management**: View and manage clients
- **Payment Tracking**: Monitor client payments and lock non-paying clients
- **Service Management**: Add services with descriptions and pricing
- **Image Upload**: Add business photos and service images

### Client Features
- **Service Booking**: Easy online booking system
- **Business Directory**: Browse available businesses and services
- **Service Details**: View services with prices and descriptions
- **Business Information**: Access business contact details and location

### Demo Business
- **StyledbyMoh Salon**: Pre-loaded demo business featuring:
  - Sample photos
  - Service menu with prices
  - Phone number and contact information
  - Booking functionality

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js / Python (to be implemented)
- **Database**: (to be implemented)
- **Authentication**: Password-protected admin panel

## Project Structure
```
Tabitha-Digital/
├── README.md
├── index.html (Main landing page)
├── admin/ (Admin dashboard)
│   ├── login.html
│   ├── dashboard.html
│   └── admin.js
├── businesses/ (Business management)
│   ├── business-list.html
│   └── business-details.html
├── services/ (Service booking)
│   ├── services.html
│   ├── booking.html
│   └── services.js
├── demo/ (StyledbyMoh Salon demo)
│   ├── styledbymooh.html
│   └── images/
├── css/ (Stylesheets)
│   └── style.css
├── js/ (JavaScript files)
│   ├── main.js
│   ├── auth.js
│   └── booking.js
└── database/ (Database schemas)
    └── schema.sql
```

## Getting Started

### Prerequisites
- Web server (Apache, Nginx, or Node.js)
- Modern web browser
- (Backend dependencies to be added)

### Installation
1. Clone the repository
```bash
git clone https://github.com/tabs254/Tabitha-Digital.git
cd Tabitha-Digital
```

2. Set up your local server and open `index.html` in your browser

3. Access admin panel at `/admin/login.html`

### Admin Login
- Default admin credentials will be configured during setup
- Password is encrypted and never visible to clients

## Features in Development

### Phase 1 (MVP)
- [ ] Landing page with business showcase
- [ ] Admin login and authentication
- [ ] Add/edit businesses functionality
- [ ] Demo business (StyledbyMoh Salon)
- [ ] Basic service listing and booking
- [ ] Client information form

### Phase 2
- [ ] Payment tracking system
- [ ] Client account lockout for non-payment
- [ ] Image upload functionality
- [ ] Email notifications
- [ ] SMS notifications

### Phase 3
- [ ] Mobile app integration
- [ ] Advanced analytics
- [ ] Client reviews and ratings
- [ ] Automated reminders
- [ ] Multi-language support

## Admin Capabilities
1. **Add New Businesses**
   - Business name, description, category
   - Contact information
   - Upload business logo and photos
   - Set business hours

2. **Manage Services**
   - Add/edit/delete services
   - Set prices
   - Upload service images
   - Add service descriptions

3. **Client Management**
   - View all clients
   - Track payment status
   - Lock clients with unpaid invoices
   - View booking history

4. **Payment Tracking**
   - Monitor client account balances
   - Track payment dates
   - Generate payment reports

## Security Features
- Password-protected admin dashboard
- Client data encryption
- Secure login system
- No public visibility of admin passwords

## Support & Contribution
For issues or suggestions, please create an issue in the repository.

## License
(To be determined)

## Contact
For inquiries about Tabitha Digital services:
- Email: (To be added)
- Phone: (To be added)
- Website: (To be added)

---

**Last Updated**: September 2024
