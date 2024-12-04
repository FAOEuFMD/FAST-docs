---
sidebar_position: 3
---

# Environment setup

## Prerequisites

-Node.js v20.13.0 or higher

-MySQL installed locally

-npm package manager

## Installation Steps

### 1-Clone the repository
```bash
git clone [https://github.com/FAOEuFMD/Targets-dashboard.git]
cd milestones-dashboard
```

### 2-Install Server Dependencies
```bash
npm install
npm install express
npm install -g nodemon
npm install mysql
```

### 3-Install Client Dependencies
```bash
cd client
npm install
npm install react-router-dom
npm install axios
```
### 4-Configure Tailwind CSS Follow the official Tailwind CSS setup guide for Vite: 
https://tailwindcss.com/docs/guides/vite

## Database Configuration

### 1.Create Environment File Create a .env file in the project root with the following configuration:
```bash
DB_HOST=localhost
DB_USER=root
DB_NAME=dashboard
DB_PASS=YOUR_PASSWORD
SUPER_SECRET=YOUR_PASSWORD
```

### 2-Database Setup
```bash
mysql -u root -p
CREATE database dashboard;
```

### 3-Run Migrations
```bash
npm run migrate
```

## Development

Starting the Application

### 1-Start Backend Server
```bash
# In project root directory
npm start
```

The Express server will run on port 5000

### 2-Start Frontend Development Server
```bash
# In client directory
cd client
npm run dev
```

The development server will run on port 5173 with hot reloading enabled



