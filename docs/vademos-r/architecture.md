---
sidebar_position: 2
---

# Architecture Overview
# **VADEMOS Shiny App Architecture Overview**

## **1. Introduction**
The **VADEMOS Shiny App** is a web-based decision-support tool designed to estimate vaccine demand for **Foot-and-Mouth Disease (FMD)**. It integrates **forecasting models**, **geospatial mapping**, and **database queries** to provide real-time analytics for policymakers and researchers.

---

## **2. Architecture Components**
The VADEMOS architecture consists of three main layers:

### **A. User Interface (UI)**
- **Frontend:** Built using **Shiny's UI functions** (`fluidPage`, `tabPanel`, `sidebarLayout`).
- **Customization:** Uses a **custom CSS file** (`styles.css`) for branding and UI enhancements.
- **Interactive Elements:** Includes **dropdowns, buttons, sliders, and tables** to allow user input and control over model parameters.
- **Map Visualization:** Uses `leaflet` to display vaccination density maps dynamically.

### **B. Server Logic**
- **Reactive Programming:** Shiny’s **reactive expressions** handle dynamic updates when user inputs change.
- **Data Processing:** Utilizes **R’s dplyr and tidyr** packages for data transformation.
- **Model Execution:**
  - Uses **AutoEnsemble models** to forecast livestock populations.
  - Computes **prophylactic vaccination requirements** using historical trends and user-defined inputs.
  - Simulates **emergency vaccination needs** using geospatial density and user-selected radius.
- **Database Interaction:** Queries **AWS-hosted MySQL databases** to retrieve and update datasets dynamically.

### **C. Data Sources & Backend**
- **AWS RDS (MySQL):** Stores:
  - **FAO livestock population data**
  - **FMD control policies (PCP stages)**
  - **Vaccination coverage parameters**
  - **Geospatial density data (Grided Livestock Model)**
- **REST API (ESRI ArcGIS):** Fetches country boundary shapefiles for visualization.
- **FAO & WOAH Datasets:** Integrated for real-world livestock and outbreak data.

---

## **3. Workflow & Data Flow**
1. **User selects input parameters** (country, species, year, vaccination policies).
2. **App queries the database** to fetch:
   - Forecasted livestock population (`AutoEnsemble` model).
   - Predefined vaccination schedules.
   - Historical PCP stage data.
3. **Prophylactic vaccination demand is calculated** based on:
   - Forecasted livestock numbers.
   - PCP-based vaccination coverage.
4. **Emergency vaccination is estimated** based on:
   - User-selected radius.
   - Livestock density from **FAO Grid Livestock Model**.
5. **Leaflet renders an interactive map** with density-based coloring.
6. **User can download results** as CSV, Excel, or PDF reports.

---

## **4. Key Technologies & Libraries**
| **Component**         | **Technology Used** |
|----------------------|------------------|
| Frontend UI         | Shiny, HTML, CSS  |
| Database            | MySQL (AWS RDS)   |
| Data Processing     | dplyr, tidyr      |
| Forecasting Models  | AutoEnsemble, ARIMA |
| Geospatial Analysis | leaflet, sf, geojsonsf |
| API Integration     | httr, jsonlite    |
| Export & Reporting  | DT, shinyjs, shinyscreenshot |

---


