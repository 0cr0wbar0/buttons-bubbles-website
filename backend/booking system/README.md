# Appointment Scheduling System

A Node.js REST API for managing appointment scheduling with user authentication, service management, and appointment booking.

## Features

- **User Management**: Registration, login, profile management with role-based access
- **Service Management**: Create and manage services with pricing and duration
- **Appointment Booking**: Book appointments, check availability, and manage bookings
- **Authentication**: JWT-based authentication with role-based authorization
- **Available Slots**: Dynamic slot availability checking (9 AM - 5 PM)

## Tech Stack

- **Backend**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT + Bcrypt
- **Security**: CORS enabled

## Installation

1. Clone or download the project
2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file from `.env.example`:
   ```
   cp .env.example .env
   ```

4. Update `.env` with your configuration:
   - `MONGODB_URI`: MongoDB connection string
   - `JWT_SECRET`: Your JWT secret key
   - `PORT`: Server port (default: 5000)

## Running the Server

Start the server:
```
npm start
```

For development with auto-reload:
```
npm run dev
```

Server will run on `http://localhost:3000`

## API Routes

### Users (`/api/users`)
- `POST /register` - Register new user
- `POST /login` - Login user
- `GET /profile` - Get current profile (protected)
- `PUT /profile` - Update profile (protected)
- `GET /` - Get all users (admin only)

### Services (`/api/services`)
- `GET /` - Get all services
- `GET /:id` - Get service details
- `POST /` - Create service (provider/admin)
- `PUT /:id` - Update service (provider/admin)
- `DELETE /:id` - Delete service (provider/admin)

### Appointments (`/api/appointments`)
- `GET /` - Get user's appointments (protected)
- `GET /:id` - Get appointment details (protected)
- `POST /` - Book appointment (protected)
- `PUT /:id` - Update appointment status (protected)
- `DELETE /:id` - Cancel appointment (protected)
- `GET /available-slots/:serviceId/:providerId` - Get available slots

## User Roles

- **customer**: Can book appointments
- **provider**: Can create services and manage their appointments
- **admin**: Full access to all resources

## Example API Usage

### Register User
```
POST /api/users/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "customer"
}
```

### Login
```
POST /api/users/login
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Create Service (as provider)
```
POST /api/services
Headers: Authorization: Bearer <token>
{
  "name": "Hair Cutting",
  "description": "Professional hair cut",
  "duration": 30,
  "price": 50,
  "category": "haircut"
}
```

### Book Appointment
```
POST /api/appointments
Headers: Authorization: Bearer <token>
{
  "serviceId": "<service_id>",
  "providerId": "<provider_id>",
  "startTime": "2024-06-15T10:00:00Z"
}
```

### Get Available Slots
```
GET /api/appointments/available-slots/:serviceId/:providerId?date=2024-06-15
```

## Database Models

### User
- name, email, password (hashed), phone, role, isActive
- Timestamps (createdAt, updatedAt)

### Service
- name, description, duration (minutes), price, provider, category, isActive
- Timestamps

### Appointment
- service, customer, provider, startTime, endTime, status, notes
- Status: pending, confirmed, completed, cancelled, rescheduled
- Timestamps

### TimeSlot
- provider, service, date, startTime, endTime, isBooked
- Timestamps

## Health Check

```
GET /api/health
```
Returns: `{ "status": "Server is running" }`

## Error Handling

All errors return appropriate HTTP status codes with error messages:
- 400: Bad Request (missing fields, validation)
- 401: Unauthorized (invalid credentials)
- 403: Forbidden (insufficient permissions)
- 404: Not Found
- 500: Server Error

## Notes

- Passwords are hashed using bcrypt with 10 salt rounds
- JWT tokens expire after 7 days by default
- Available slots are generated from 9 AM to 5 PM
- Appointments cannot overlap for the same provider
