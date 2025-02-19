---
sidebar_position: 2
---

# Architecture Overview

## Technical Stack

### Frontend

- **TypeScript** (v5.2.2) - Primary programming language; ensures consistent typing and modern JavaScript features
- **React** (v18.2.0) - UI framework for building reusable and dynamic interfaces
- **React Router Dom** (v6.22.3) - Client-side routing and navigation
- **Tailwind CSS** (v3.4.3) - Utility-first CSS framework for rapid UI development
- **Vite** - Build tool and development server for fast builds

### Backend

- **Node.js** (v20.13.0) - JavaScript runtime environment for server-side logic
- **Express.js** (v4.16.1) - Light web application framework for building API endpoints
- **MySQL** (v2.18.1) - Relational database management system

### Additional tools
- Plotly.js - For creating interactive data visualisations
- Axios - For handling HTTP requests on the frontend
- Font Awesome - For graphics
- dotenv - For managing environment variables securely

### Project Structure

- **milestones-dashboard/**
  - **client/** &nbsp;&nbsp;&nbsp;&nbsp;# React TypeScript frontend
    - **src/** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Source code
    - **public/** &nbsp;&nbsp;&nbsp;&nbsp;# Static assets
    - **vite.config.ts** &nbsp;&nbsp;&nbsp;&nbsp;# Vite configuration
  - **routes/** &nbsp;&nbsp;&nbsp;&nbsp;# Express route handlers
  - **model/** &nbsp;&nbsp;&nbsp;&nbsp;# Database models
  - **bin/** &nbsp;&nbsp;&nbsp;&nbsp;# Server startup scripts
  - **public/** &nbsp;&nbsp;&nbsp;&nbsp;# Static files
  - **app.js** &nbsp;&nbsp;&nbsp;&nbsp;# Main Express application

### Database Schema

The database follows a hierarchical structure to reflect program objectives and targets:

- focus_objectives: Main program objectives
  - id (int)
  - name (varchar(255))
  - management (varchar(255))

- key_areas: Specific areas under each focus objective
  - id (int)
  - focus_objectives_id (int)
  - name (varchar(255))
  - management (varchar(255))

- targets: Specific measurable goals under each key area
  - id (int)
  - key_area_id (int)
  - expected_result_id (varchar(255))
  - expected_result (varchar(255))
  - inidcator (varchar(255))
  - target_description (varchar(255))
  - result_to_date (int)
  - program_target (int)
  - priority (varchar(255))
  - target_timeframe (varchar(255))
  - timeframe_frequency (varchar(255))

- targets details: Information specific to the completion of each target
  - id (int)
  - target_id (varchar(100))
  - detail_1 (text)
  - detail_2 (text)
  - etc.

### Frontend Components

Built with React and TypeScript, featuring:

- Modern UI with Tailwind CSS for fast development and a consistent look
  - `client/tailwind.config.js` file includes built-in, reusable theme colors to remain on brand
- React Router DOM for navigation between pages
- Plotly.js for data visualisation
- Resuable components located in the `client/src/components/` directory for modularity
- Interactive pages to filter and visualise data, located in the `client/src/pages/` directory
  - *Homepage* displays focus objectives
  - *Key Areas* displays key area data filtered by focus objective
  - *Targets* displays targets data filtered by focus objective and key area
  - *Page 404* shows the user the page cannot be found

### API Endpoints

The backend uses RESTful API endpoints to manage targets data and fetch progress data:

- GET `api/targets/`: Fetch all targets data
- GET `api/targets/focus_objective/:focus_objective_id`: Fetch targets data filtered by focus objective
- GET `api/targets/focus_objective/:focus_objective_id/key_area/:key_area_id`: Fetch data filtered by focus objective and key area
- GET `api/targets/health-check`: Check the status of the server
