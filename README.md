# 🦌 Patronus: A Magical Donation Platform

> *"Happiness can be found even in the darkest of times if one only remembers to turn on the light."*

## 🌟 Project Overview

Patronus is a comprehensive, full-stack donation platform designed to connect donors with meaningful causes. Built with the MERN (MongoDB, Express, React, Node.js) stack, the platform provides a secure, user-friendly experience for creating and supporting fundraising campaigns.

## 🔗 Deployment Link
**Frontend**: [https://patronus-frontend.vercel.app/login](https://patronus-frontend.vercel.app/login)

## ✨ Core Features

### 🔐 User Authentication
- Secure user registration and login system
- JWT-based authentication for robust security
- Password encryption using bcryptjs
- Protected routes ensuring user data privacy

### 📝 Campaign Management
- Create comprehensive fundraising campaigns
- Detailed campaign information management
- Easy updating and deletion of campaigns
- Flexible campaign browsing and filtering

### 💝 Donation Processing
- Seamless donation workflow
- Integrated Stripe payment processing
- Real-time donation tracking
- Comprehensive donation history

### 📊 Advanced Reporting
- Administrative dashboard with system-wide statistics
- Individual user contribution tracking
- Campaign performance metrics and insights

## 🛠️ Technology Stack

### Backend
- **🟢 Node.js**: Server-side runtime environment
- **🍃 Express.js**: Web application framework
- **🍃 MongoDB**: NoSQL database for flexible data storage
- **🔐 JSON Web Tokens (JWT)**: Authentication mechanism
- **💳 Stripe API**: Payment processing integration

### Frontend
- **⚛️ React**: Component-based user interface library
- **🎨 Ant Design**: Professional UI component library
- **🌪️ Tailwind CSS**: Utility-first CSS framework
- **⚡ Zustand**: Lightweight state management
- **📡 Axios**: HTTP request library

## 📁 Project Structure

### Backend Structure
```
patronus-backend/
├── config/
│   └── db-config.js         # Database configuration
├── middleware/
│   └── index.js             # Authentication middleware
├── models/
│   ├── campaign-model.js    # Campaign data schema
│   ├── donation-model.js    # Donation tracking schema
│   └── user-model.js        # User account schema
├── routes/
│   ├── users-route.js       # User management endpoints
│   ├── campaigns-route.js   # Campaign operation routes
│   ├── donations-route.js   # Donation processing routes
│   ├── payments-route.js    # Stripe payment integration
│   └── reports-route.js     # Reporting system routes
├── .env                     # Environment configuration
├── app.js                   # Application entry point
└── README.md                # Project documentation
```

### Frontend Structure
```
patronus-frontend/
├── components/    # Reusable React components
├── layout/        # Page layout components
├── pages/         # Main application views
├── providers/     # Context and theme providers
├── store/         # State management
└── styles/        # Global styling
```

## 🔌 API Endpoint Overview

### User Endpoints (`/api/users`)
- `POST /register`: User account creation
- `POST /login`: User authentication
- `GET /current-user`: Retrieve user profile
- `GET /get-all`: List all users (admin)
- `GET /get-stats`: User donation statistics
- `POST /update-password`: Password modification

### Campaign Endpoints (`/api/campaigns`)
- `POST /create`: Campaign creation
- `PUT /update/:id`: Update campaign details
- `DELETE /delete/:id`: Remove campaign
- `GET /get-all`: List all campaigns
- `GET /get/:id`: Fetch specific campaign details

### Donation Endpoints (`/api/donations`)
- `POST /create`: Process new donation
- `GET /get-all`: View all donations
- `GET /get-donations-by-campaign/:id`: Campaign-specific donations
- `GET /get-donations-by-user/:id`: User donation history

### Payment Endpoints (`/api/payments`)
- `POST /create-payment-intent`: Initialize Stripe payment

### Reporting Endpoints (`/api/reports`)
- `GET /admin-reports`: System-wide statistics
- `GET /user-reports/:id`: Individual user reports

## 🔒 Security Measures

- JWT authentication for secure route access
- Bcrypt password hashing
- Environment-based configuration management
- Stripe payment tokenization
- Input validation on all API routes
- Secure storage of sensitive credentials

## 🚀 Local Development Setup

### Prerequisites
- Node.js (v14+ recommended)
- npm or yarn package manager
- MongoDB instance
- Stripe account

### Installation Steps
1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/patronus.git
   cd patronus
   ```

2. Install dependencies
   ```bash
   npm install  # or yarn install
   ```

3. Configure environment variables
   Create a `.env` file with the following:
   ```env
   DATABASE_URL=mongodb://your-mongodb-url
   JWT_SECRET=your-secure-jwt-secret
   STRIPE_SECRET_KEY=your-stripe-secret-key
   PORT=3000
   ```

4. Start the development server
   ```bash
   npm run dev  # or yarn dev
   ```

## 🌐 Production Deployment

1. Build the production version
   ```bash
   npm run build  # or yarn build
   ```

2. Start the production server
   ```bash
   npm start  # or yarn start
   ```
