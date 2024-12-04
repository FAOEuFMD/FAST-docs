---
sidebar_position: 2
---

# Architecture Overview

## Technical Stack

### Frontend
- **TypeScript** (v5.2.2) - Primary programming language
- **React** (v18.2.0) - UI framework
- **React Router Dom** (v6.22.3) - Client-side routing
- **Axios** (v1.6.8) - HTTP client for API requests
- **Tailwind CSS** (v3.4.3) - Utility-first CSS framework
- **Vite** - Build tool and development server

### Backend
- **Node.js** (v20.13.0) - Runtime environment
- **Express.js** (v4.16.1) - Web application framework
- **MySQL** (v2.18.1) - Database management system

# Project Structure

```tree
milestones-dashboard/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── pages/         # React components for different pages
│   │   │   └── Dashboard.tsx  # Dashboard component
│   │   ├── main.tsx       # Main React entry point
│   │   └── App.tsx        # Root React component
├── model/                  # Backend database models
│   ├── database.js        # Database connection and setup
│   └── init_db.sql        # Database initialization SQL
├── bin/
│   └── www               # Server startup script
├── public/               # Static files
│   └── stylesheets/     # CSS files
├── package.json         # Server dependencies and scripts
├── .env                 # Environment configuration
└── README.md            # Project documentation

(May need revising as it has changed a lot, either way I believe given what we want to acomplish this structure may be better: )

```tree
targets-dashboard/
├── client/                     # Frontend React application
│   ├── src/
│   │   ├── components/        # Reusable React components
│   │   │   ├── common/       # Shared UI components
│   │   │   │   ├── Button/
│   │   │   │   ├── Card/
│   │   │   │   └── Navigation/
│   │   │   └── dashboard/    # Dashboard-specific components
│   │   │       ├── Charts/
│   │   │       └── Metrics/
│   │   ├── pages/
│   │   │   ├── Homepage/     # Landing page
│   │   │   ├── FocusAreas/   # Focus area dashboards
│   │   │   │   ├── Focus1/   # First focus area
│   │   │   │   ├── Focus2/   # Second focus area
│   │   │   │   └── Focus3/   # Third focus area
│   │   │   ├── DataEntry/    # Manager's data entry interface
│   │   │   │   ├── Forms/
│   │   │   │   └── Validation/
│   │   │   └── Dashboard/    # Main dashboard
│   │   ├── services/         # API integration
│   │   │   ├── api.ts       # API calls
│   │   │   └── auth.ts      # Authentication service
│   │   ├── types/           # TypeScript interfaces
│   │   ├── utils/           # Helper functions
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── package.json
│
├── server/                    # Backend application
│   ├── controllers/          # Request handlers
│   │   ├── focusArea.js     # Focus area controllers
│   │   ├── metrics.js       # Metrics controllers
│   │   └── users.js         # User management
│   ├── models/              # Database models
│   │   ├── Focus.js        # Focus area model
│   │   ├── Metric.js       # Metrics model
│   │   └── User.js         # User model
│   ├── routes/              # API routes
│   │   ├── focusArea.js    # Focus area routes
│   │   ├── metrics.js      # Metrics routes
│   │   └── users.js        # User routes
│   ├── middleware/          # Custom middleware
│   │   ├── auth.js         # Authentication middleware
│   │   └── validation.js   # Input validation
│   ├── config/             # Configuration files
│   │   ├── database.js     # Database configuration
│   │   └── auth.js         # Auth configuration
│   └── app.js              # Express app setup
│
├── database/                 # Database scripts
│   ├── migrations/          # Database migrations
│   └── seeds/              # Seed data
│
├── .env                     # Environment variables
├── package.json             # Project dependencies
└── README.md               # Project documentation
(to be discussed and agreed)