---
sidebar_position: 2
---

# Architecture Overview

## Technical Stack

### Frontend

- **TypeScript** (v5.2.2) - Primary programming language
- **React** (v18.2.0) - UI framework
- **React Router Dom** (v6.22.3) - Client-side routing
- **Tailwind CSS** (v3.4.3) - Utility-first CSS framework
- **Vite** - Build tool and development server

### Backend

- **Node.js** (v20.13.0) - Runtime environment
- **Express.js** (v4.16.1) - Web application framework
- **MySQL** (v2.18.1) - Database management system

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

The database follows a hierarchical structure:

- focus_objectives: Main program objectives
  - id
  - name
    subtitle
    key_areas: Specific areas under each focus objective
    id
    focus_objectives_id
    - name
- targets: Specific measurable goals
  - id
  - key_area_id
  - indicator
  - description
  - annual_target
  - program_target
    Quarterly progress columns (Q1-Q4)

### Frontend Components

Built with React and TypeScript, featuring:

- Modern UI with Tailwind CSS
- React Router for navigation
- Plotly.js for data visualisation
