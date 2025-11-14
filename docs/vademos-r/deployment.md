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
 
  ## Deployment of VADEMOS Shiny App on AWS Lightsail

Due to memory limitations on the free tier of **shinyapps.io**, we opted to deploy the VADEMOS Shiny application on **AWS Lightsail**, which provides more flexibility and resources for hosting.

### Why Lightsail?
- Affordable and scalable virtual servers.
- Full control over the environment (OS, R, Shiny Server).
- Ability to handle larger apps without hitting free-tier limits.

### Quick Deployment Steps
1. **Create a Lightsail Instance**  
   - Choose an OS (Ubuntu recommended).
   - Allocate sufficient RAM and CPU for your app.

2. **Install Shiny Server and R**  
   - SSH into the instance.
   - Install R and Shiny Server using official guides.

3. **Upload Your App**  
   - Use `scp` or `SFTP` to transfer your app folder from local machine to the instance.
   - Place the app under `/srv/shiny-server/<app-name>`.

4. **Set Permissions and Restart**  
   - Ensure the app directory is readable by Shiny Server.
   - Restart Shiny Server:  
     ```bash
     sudo systemctl restart shiny-server
     ```

5. **Access the App**  
   - Open your browser and navigate to:  
     `http://<your-lightsail-public-ip>:3838/<app-name>`

---

This setup allows you to bypass the memory restrictions of shinyapps.io and gives you full control over scaling and updates.


## How to Update the VADEMOS Shiny App on AWS Lightsail

To update the deployed Shiny app, follow these steps:

### 1. Prepare Your Local Changes
Ensure your updated app files are ready on your local machine.

### 2. Connect to Lightsail Using Git Bash
Open **Git Bash** and connect via SSH using your `.pem` key:
```bash
ssh -i "/path/to/LightsailKey.pem" ubuntu@<your-lightsail-public-ip>
Replace /path/to/LightsailKey.pem with the actual path to your key file.
```
### 3.3. Upload Updated Files with SCP
From Git Bash, run:
```bash
scp -i "/path/to/LightsailKey.pem" -r "/local/path/to/VADEMOS" ubuntu@<your-lightsail-public-ip>:/srv/shiny-server/VADEMOS
```

This will overwrite the existing app files with your updated version.
