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

db-manager/
├── .github/
│   └── workflows/
├── .husky/
│   ├── _
│   └── pre-commit
├── bin/
│   └── www
├── client/
│   ├── public/
│   ├── src/
│   ├── .gitignore
│   ├── babel.config.js
│   ├── jsconfig.json
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── README.md
│   ├── tailwind.config.js
│   └── vue.config.js
├── config/
│   └── env-data.ts
├── server/
│   ├── controllers/
│   ├── guards/
│   ├── model/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── .env
│   └── app.js
├── static/
│   └── assets/
├── tests/
│   ├── dto/
│   ├── fixtures/
│   ├── pages/
│   ├── ui/
│   ├── Utils/
│   └── rmtRiskScores.test.js
├── .env
├── .env.example
├── .gitignore
├── .huskyrc
├── .prettierignore
├── .prettierrc.json
├── dump-db_manager-202412231100.sql
├── dump-db_training-202501111117.sql
├── dump-PCP-202501111117.sql
├── dump-RMT-202501111117.sql
├── eslint.config.mjs
├── jest.config.js
├── package-lock.json
├── package.json
├── playwright.config.ts
├── README.md
└── tsconfig.json

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

