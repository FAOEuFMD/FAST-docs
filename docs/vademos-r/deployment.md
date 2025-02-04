---
sidebar_position: 4
---

# **VADEMOS Shiny App Deployment Guide**

## **1. Deployment Overview**
The VADEMOS Shiny App is deployed directly from **RStudio** to **ShinyApps.io**, a cloud-based hosting platform for Shiny applications. This eliminates the need for manual server management while ensuring scalability and accessibility.

---

## **2. Deployment Environment**
### **A. Requirements**
- **RStudio (Latest Version)**
- **shinyapps.io Account** (Account details in the IT-map file)
- **R Packages Required:**
  - `shiny`, `shinydashboard`, `shinyjs`
  - `dplyr`, `tidyr`, `ggplot2`
  - `leaflet`, `sf`, `geojsonsf`
  - `DT`, `shinyscreenshot`, `httr`, `jsonlite`
  - `RMariaDB` (for AWS MySQL connections)

### **B. Configuration**
- **shinyapps.io Account Setup**
  - Ensure you are logged into the correct **shinyapps.io** account.
  - Run the deploy button in RStudio. (deploy to correct version currenlty using VADEMOS branch)
  

- **AWS Database Credentials (MySQL)**
  - Stored as **environment variables** in `.Renviron`:
    ```r
    DB_HOST="your-db-host.amazonaws.com"
    DB_NAME="your-db-name"
    DB_USER="your-username"
    DB_PASSWORD="your-password"
    DB_PORT="3306"
    ```
  - Ensure `.Renviron` is **not committed** to version control.