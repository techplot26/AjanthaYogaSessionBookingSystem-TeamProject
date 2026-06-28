# Ajantha Yoga Session Booking System Team Project
 
## Project Overview

The Ajantha Yoga Session Booking System is a full-stack web application designed to streamline the management and booking of yoga sessions. The system enables users to browse available sessions, register, log in, book and cancel sessions, and manage their profiles, while administrators can securely manage yoga sessions and monitor bookings through a dedicated dashboard. The project was developed using modern software engineering practices, including Object-Oriented Programming (OOP), Design Patterns, RESTful APIs, GitHub version control, GitHub Actions CI/CD, and deployment on AWS EC2. Backend functionality was validated through unit testing using the Mocha and Chai testing frameworks, while RESTful APIs were thoroughly tested using Postman.

---


# Live Deployment

**Application URL**

```
http://3.26.213.247
```

**Backend API**

```
http://3.26.213.247:5001
```

### Demo Credentials

**Administrator**

```
Email: adminfinal@ajantha.com
Password: Admin123
```

**Test User**

```
Email: testuser@ajantha.com
Password: Test123$$
```

> **Note:** The AWS EC2 instance may be stopped when the project is not being demonstrated to avoid unnecessary AWS charges. If restarted, the public IP address may change.

---

# GitHub Repository

Repository:

```
https://github.com/techplot26/AjanthaYogaSessionBookingSystem-TeamProject
```

---

# Features

## User Features

* User Registration
* User Login using JWT Authentication
* Browse Available Yoga Sessions
* View Session Details
* Book Yoga Sessions
* Cancel Bookings
* View Booking History
* Update User Profile


## Administrator Features

* Secure Administrator Login
* Create Yoga Sessions
* Update Yoga Sessions
* Delete Yoga Sessions
* View All Bookings
* Dashboard Management

---

# Technology Stack

## Frontend

* React.js
* HTML5
* CSS
* JavaScript

## Backend

* Node.js
* Express.js
* JWT Authentication

## Database

* MongoDB Atlas


## DevOps & Cloud

* GitHub
* GitHub Actions
* Self-Hosted GitHub Runner
* AWS EC2 (Ubuntu)
* PM2 Process Manager


---

# Design Patterns Implemented

* Factory Pattern
* Singleton Pattern
* Strategy Pattern
* Observer Pattern
* Proxy Pattern
* Facade Pattern
* Chain of Responsibility

---

# Installation Instructions

## Clone Repository

```bash
git clone https://github.com/techplot26/AjanthaYogaSessionBookingSystem-TeamProject.git

cd AjanthaYogaSessionBookingSystem-TeamProject
```

---

## Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file inside the **backend** folder.

```env
PORT=5001

MONGO_URI=<Your MongoDB Atlas Connection String>

JWT_SECRET=<Your JWT Secret>
```

Start the backend server.

```bash
npm start
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm start
```

The frontend runs at:

```
http://localhost:3000
```

---

# API Endpoints

## Authentication

```
POST /api/auth/register

POST /api/auth/login
```

## Yoga Sessions

```
GET /api/yoga-sessions

POST /api/yoga-sessions

PUT /api/yoga-sessions/:id

DELETE /api/yoga-sessions/:id
```

## Bookings

```
GET /api/bookings

POST /api/bookings

PUT /api/bookings/:id/cancel
```

---

# Deployment

The application is deployed on an AWS EC2 Ubuntu instance using:

* Node.js
* MongoDB Atlas
* PM2 Process Manager
* Nginx Reverse Proxy
* GitHub Actions
* Self-Hosted GitHub Runner

Useful PM2 commands:

```bash
pm2 start server.js --name ajantha-team-backend

pm2 restart ajantha-team-backend

pm2 logs ajantha-team-backend

pm2 save
```

---

# Continuous Integration / Continuous Deployment (CI/CD)

GitHub Actions automatically performs the following tasks:

### Continuous Integration (CI)

* Checkout Repository
* Install Backend Dependencies
* Install Frontend Dependencies
* Build React Application

### Continuous Deployment (CD)

* Deploy Application to AWS EC2
* Execute Deployment using Self-Hosted Runner
* Restart Backend Service using PM2
* Update Production Application

Workflow file:

```
.github/workflows/ci.yml
```

---

# Authors


* Vynka Smith
* Rizwan Mohammed
