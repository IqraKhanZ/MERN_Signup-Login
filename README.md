# 🔐 MERN Stack Authentication App

A full-stack authentication application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring user registration, login, and protected routes with JWT authentication.

## ✨ Features

### Backend Features
- **User Registration & Login** - Secure user authentication system
- **JWT Authentication** - Token-based authentication with 24h expiry
- **Password Security** - Password hashing using bcrypt
- **Input Validation** - Server-side validation using Joi
- **Protected Routes** - Middleware-based route protection
- **MongoDB Integration** - User data storage with Mongoose ODM
- **CORS Support** - Cross-origin resource sharing enabled
- **Demo API** - Sample protected products endpoint

### Frontend Features
- **React SPA** - Single Page Application with React Router
- **Authentication Pages** - Login and Signup forms
- **Protected Dashboard** - Home page accessible only to authenticated users
- **Token Management** - Automatic JWT token handling
- **Toast Notifications** - User-friendly success/error messages
- **Auto-redirect** - Smart navigation based on authentication status
- **Responsive Design** - Mobile-friendly interface

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **Joi** - Data validation
- **CORS** - Cross-Origin Resource Sharing

### Frontend
- **React** - UI library
- **React Router DOM** - Client-side routing
- **React Toastify** - Toast notifications
- **CSS** - Custom styling

## 📁 Project Structure

```
auth-mern-app/
├── backend/
│   ├── Controllers/
│   │   └── AuthController.js          # Authentication logic
│   ├── Middlewares/
│   │   ├── Auth.js                    # JWT verification middleware
│   │   └── AuthValidation.js          # Input validation middleware
│   ├── Models/
│   │   ├── db.js                      # Database connection
│   │   └── User.js                    # User schema
│   ├── Routes/
│   │   ├── AuthRouter.js              # Authentication routes
│   │   └── ProductRouter.js           # Protected product routes
│   ├── index.js                       # Server entry point
│   ├── package.json                   # Backend dependencies
│   └── vercel.json                    # Vercel deployment config
├── frontend/
│   ├── public/
│   │   ├── index.html                 # HTML template
│   │   └── ...
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.js                # Protected home page
│   │   │   ├── Login.js               # Login form
│   │   │   └── Signup.js              # Registration form
│   │   ├── App.js                     # Main app component
│   │   ├── RefrshHandler.js           # Authentication state handler
│   │   ├── utils.js                   # Toast notification utilities
│   │   └── ...
│   ├── package.json                   # Frontend dependencies
│   └── vercel.json                    # Vercel deployment config
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd auth-mern-app
```

2. **Install Backend Dependencies**
```bash
cd backend
npm install
```

3. **Install Frontend Dependencies**
```bash
cd ../frontend
npm install
```

### Environment Setup

Create a `.env` file in the `backend` directory:

```env
# MongoDB Connection
MONGO_CONN=mongodb://localhost:27017/auth-mern-app
# or for MongoDB Atlas:
# MONGO_CONN=mongodb+srv://username:password@cluster.mongodb.net/auth-mern-app

# JWT Secret (use a strong, random string)
JWT_SECRET=your-super-secret-jwt-key-here

# Server Port (optional, defaults to 8080)
PORT=8080
```

## 🏃‍♂️ Running the Application

### Development Mode

1. **Start the Backend Server**
```bash
cd backend
npm start
```
The server will run on `http://localhost:8080`

2. **Start the Frontend Application** (in a new terminal)
```bash
cd frontend
npm start
```
The React app will run on `http://localhost:3000`

### Production Build

**Build the Frontend**
```bash
cd frontend
npm run build
```

## 🔌 API Endpoints

### Authentication Routes
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/auth/signup` | Register new user | No |
| POST | `/auth/login` | User login | No |

### Protected Routes
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/products` | Get products list | Yes |
| GET | `/ping` | Health check | No |

### Request/Response Examples

**Signup Request**
```json
POST /auth/signup
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Login Request**
```json
POST /auth/login
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Login Response**
```json
{
  "message": "Login Success",
  "success": true,
  "jwtToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "email": "john@example.com",
  "name": "John Doe"
}
```

## 🔐 Authentication Flow

1. **User Registration**
   - User fills signup form
   - Password is hashed with bcrypt
   - User data saved to MongoDB
   - Success message displayed

2. **User Login**
   - User provides email/password
   - Credentials verified against database
   - JWT token generated (24h expiry)
   - Token stored in localStorage
   - User redirected to home page

3. **Protected Route Access**
   - JWT token sent in Authorization header
   - Token verified by middleware
   - Access granted/denied based on token validity

4. **Logout**
   - Token removed from localStorage
   - User redirected to login page

## 🎯 Usage Guide

### For Users
1. **Register**: Create an account with name, email, and password
2. **Login**: Sign in with your credentials
3. **Home**: Access the protected dashboard
4. **Logout**: Sign out safely

### For Developers
- **Adding Protected Routes**: Use the `ensureAuthenticated` middleware
- **Custom Validation**: Extend the Joi schemas in `AuthValidation.js`
- **New API Endpoints**: Add routes in respective router files
- **Frontend Pages**: Create components and add routes in `App.js`

## 🚀 Deployment

Both frontend and backend are configured for Vercel deployment with `vercel.json` files.

### Deploy to Vercel

1. **Backend Deployment**
```bash
cd backend
vercel --prod
```

2. **Frontend Deployment**
```bash
cd frontend
vercel --prod
```

Remember to:
- Add environment variables in Vercel dashboard
- Update API URLs in frontend for production
- Configure MongoDB Atlas for production database

## 🛡️ Security Features

- **Password Hashing**: bcrypt with salt rounds
- **JWT Tokens**: Secure token-based authentication
- **Input Validation**: Server-side validation with Joi
- **CORS Protection**: Configure allowed origins
- **Route Protection**: Middleware-based access control

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Troubleshooting

**Common Issues:**

- **MongoDB Connection**: Ensure MongoDB is running and connection string is correct
- **JWT Errors**: Check JWT_SECRET environment variable
- **CORS Issues**: Verify frontend URL in CORS configuration
- **Port Conflicts**: Change PORT in .env file if 8080 is occupied

## 📞 Support

For support and questions, please open an issue in the repository.
