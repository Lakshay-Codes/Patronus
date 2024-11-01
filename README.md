# 🪄 PATRONUS Backend

*A magical donation platform crafted with the MERN stack* ✨

A powerful backend system enabling secure campaign creation and donation processing. Featuring JWT magic, Stripe payments, campaign wizardry, donor messaging, and crystal-clear reporting. Perfect for organizations and individuals seeking to create and manage donation campaigns securely. 🛡️

## ⭐ Features

### 🔐 User Authentication
* 🎯 Secure registration and login system
* 🔑 JWT-based authentication
* 🔒 Password encryption with bcryptjs

### 📝 Campaign Management
* ✨ Create and manage fundraising campaigns
* 📝 Update campaign details
* 🗑️ Delete campaigns
* 🔍 Fetch campaign information

### 💝 Donation System
* 💰 Process donations to campaigns
* 📊 Track donation history
* 🔍 Filter donations by campaign or user
* 💳 Integrated Stripe payment processing

### 📈 Reporting
* 📊 Administrative dashboard with summary reports
* 👤 Individual user contribution tracking
* 📉 Campaign performance metrics

## 📁 Project Structure

```
.
├── 📁 config/
│   └── 📄 db-config.js         # Database configuration
├── 📁 middleware/
│   └── 📄 index.js             # Authentication middleware
├── 📁 models/
│   ├── 📄 campaign-model.js    # Campaign schema
│   ├── 📄 donation-model.js    # Donation schema
│   └── 📄 user-model.js        # User schema
├── 📁 routes/
│   ├── 📄 users-route.js       # User management routes
│   ├── 📄 campaigns-route.js   # Campaign operations
│   ├── 📄 donations-route.js   # Donation processing
│   ├── 📄 payments-route.js    # Payment integration
│   └── 📄 reports-route.js     # Reporting system
├── 📄 .env                     # Environment variables
├── 📄 app.js                   # Application entry point
└── 📄 README.md               
```

## 🛠️ Requirements

* 📦 Node.js (v14 or higher)
* 🗄️ MongoDB
* 💳 Stripe account
* 📥 npm or yarn package manager

## ⚡ Installation

1. **📥 Clone the repository**
```bash
git clone https://github.com/yourusername/donation-platform.git
cd donation-platform
```

2. **🔧 Install dependencies**
```bash
npm install
```

3. **⚙️ Configure environment variables**
Create a `.env` file in the root directory:
```env
DATABASE_URL=mongodb://your-mongodb-url
JWT_SECRET=your-secure-jwt-secret
STRIPE_SECRET_KEY=your-stripe-secret-key
PORT=3000
```

4. **🚀 Start the server**
```bash
npm start
```

## 🔌 API Endpoints

### 👥 User Routes (`/api/users`)
* 📝 `POST /register` - Create new user account
* 🔑 `POST /login` - Authenticate user and generate token
* 👤 `GET /current-user` - Fetch authenticated user profile
* 👥 `GET /get-all` - List all users (admin only)
* 📊 `GET /get-stats` - View user donation statistics
* 🔒 `POST /update-password` - Update user password

### 🎯 Campaign Routes (`/api/campaigns`)
* ✨ `POST /create` - Create new campaign
* 📝 `PUT /update/:id` - Update campaign details
* 🗑️ `DELETE /delete/:id` - Remove campaign
* 📋 `GET /get-all` - List all campaigns
* 🔍 `GET /get/:id` - Fetch specific campaign

### 💝 Donation Routes (`/api/donations`)
* 💰 `POST /create` - Process new donation
* 📋 `GET /get-all` - View all donations
* 🔍 `GET /get-donations-by-campaign/:id` - Campaign-specific donations
* 👤 `GET /get-donations-by-user/:id` - User donation history

### 💳 Payment Routes (`/api/payments`)
* 💸 `POST /create-payment-intent` - Initialize Stripe payment

### 📊 Report Routes (`/api/reports`)
* 📈 `GET /admin-reports` - System-wide statistics
* 📉 `GET /user-reports/:id` - Individual user reports

## 🔒 Security Considerations

* 🔐 JWT tokens required for authenticated routes
* 🔒 Password hashing implemented
* 🛡️ Environment variables for sensitive data
* ✅ Input validation on all routes
