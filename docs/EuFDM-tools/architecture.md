---
sidebar_position: 3
---

# Architecture

## Backend (Server)

Framework : Express.js

Port : 5800 (default)

Main Components :

Authentication Service ( /api/auth)

PCP Management ( /api/pcp)

Diagnostic Support ( /api/diagnostic-support)

Stock Management ( /api/stock)

RMT Management ( /api/rmt)

LOA Management ( /api/LOA)

Feedback System ( /api/feedback)

Visits Management ( /api/visits)

Training Data Management ( /api/training)

RISP Management ( /api/risp)

## Frontend (Client)

Framework : Vue.js

Features :

Hot-reload development environment

Production build system

Linting support

Customizable configuration

# API Endpoints

The server exposes several REST API endpoints:

```bash
/api/auth           - Authentication endpoints
/api/pcp            - PCP related operations
/api/diagnostic-support - Diagnostic support features
/api/stock          - Stock management
/api/rmt            - RMT related operations
/api/LOA            - LOA management
/api/feedback       - Feedback system
/api/visits         - Visits management
/api/training       - Training data operations
/api/risp           - RISP management
```

