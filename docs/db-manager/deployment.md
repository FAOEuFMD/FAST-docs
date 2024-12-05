---
sidebar_position: 4
---

# Deployment

1-Start the client (Terminal 1):
```bash
cd client
npm run serve
```

2-Start the server (Terminal 2):
```bash
cd server
npm start

```

# Production Environment

1-Build the client for production:
```bash
cd client
npm run build
```

2-Run linting (optional):
```bash
npm run lint

```


# Additional Configuration

## Client Configuration
The Vue.js client can be customized using the Vue CLI configuration

Reference: https://cli.vuejs.org/config/

## Server Configuration
The server runs on port 5800 by default

CORS is enabled for cross-origin requests

Uses various middleware including:

HTTP error handling

Cookie parsing

Request logging (Morgan)

JSON body parsing

# Security Features
Express security middleware

CORS protection

Cookie parsing

Authentication system

# Maintenance
Regular npm updates recommended

Linting available for code quality

Built-in development tools for debugging