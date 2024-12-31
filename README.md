# Bring it back: A Lost and Found Items Website

bring it back is a web platform designed to connect individuals who have lost personal belongings with those who may have found them. The site offers functionality for reporting lost items, browsing found items, and facilitating interactions between users to recover items. This project is a practical demonstration of full-stack web development, user authentication, database management, and responsive design.

## Project Purpose

The purpose of this project is to create a user-friendly platform that simplifies the process of recovering lost items while showcasing the developer's ability to:
- Tackle challenges
- Apply creativity in design and functionality
- Solve practical problems using code
- Deliver top-quality, professional-grade work

## Live Demo

[Visit the Live Website](#)

## Key Features

### General Features
- Fully responsive design optimized for mobile, tablet, and desktop
- Intuitive and visually appealing UI/UX with proper color contrasts and alignment
- Dynamic page titles for a polished experience

### Authentication System
- Email/password-based authentication using Firebase
- Social login (Google or GitHub)
- Password strength validation and error handling
- Secure handling of Firebase and MongoDB credentials with environment variables

### Core Pages
1. **Home Page**
   - Slider with at least 3 meaningful slides
   - Latest Lost & Found items section (6 items) with "View Details" and "See All" buttons
   - Two additional meaningful sections
   - Framer motion animations

2. **Lost & Found Items Page**
   - Search functionality by title or location
   - Display all items in a card layout

3. **Add Lost & Found Item Page**
   - Private/protected route for adding item details
   - Fields include item type, image upload, title, description, category, location, date, and contact info
   - Success toast on submission

4. **Item Details Page**
   - Display all item details
   - Conditional action buttons for "Found This!" or "This is Mine!"
   - Modal for marking items as recovered

5. **Manage My Items Page**
   - Private/protected route to view, update, or delete user-added items
   - Update form with pre-filled data
   - Confirmation prompt for deletions

6. **All Recovered Items Page**
   - Display all recovered items in table format
   - Option to toggle between table and card layout

7. **404 Page**
   - A user-friendly "Not Found" page for invalid routes

### Additional Functionalities
- JWT-based authentication for secure private routes
- Loading spinners during data fetch operations
- Notifications using toast or sweet alert for CRUD operations
- Configured CORS, route protection, and secure server deployment

## Technology Stack

### Frontend
- **React.js**: For building the user interface
- **React Router**: For client-side routing
- **React DatePicker**: For date input
- **Framer Motion**: For animations
- **CSS/Bootstrap/Tailwind**: For styling

### Backend
- **Node.js & Express**: For building the API
- **MongoDB**: For database management
- **JWT**: For authentication and authorization


### Additional Tools
- **Firebase**: For authentication
- **SweetAlert**: For notifications
- **dotenv**: For managing environment variables





