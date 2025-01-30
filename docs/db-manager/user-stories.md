---
sidebar_position: 2
---

```markdown
# User Stories

## 1. General (No Login Required)

### 1.1 Home Page Access
- **As a** visitor
- **I want to** access the home page
- **So that** I can learn about the web app and its functionalities

### 1.2 Areas of Expertise
- **As a** visitor
- **I want to** navigate through the four areas of expertise
- **So that** I can explore relevant information on each topic

### 1.3 Chatbot (FMD & FAST Diseases)
- **As a** visitor
- **I want to** ask questions via the chatbot
- **So that** I can get information about FMD and FAST diseases

### 1.4 Tools Access (No Login Required)
#### 1.4.1 RMT Tool
- **As a** visitor
- **I want to** input data and retrieve calculated results
- **So that** I can analyze outcomes based on stored data and my inputs

#### 1.4.2 FAST Report
- **As a** visitor
- **I want to** view the map and dashboard
- **So that** I can visualize disease-related data (requires Flask for Python integration)

#### 1.4.3 Emergency Toolbox
- **As a** visitor
- **I want to** access an embedded Trello board
- **So that** I can manage emergency-related tasks and resources
In future to replicat in app by full stac

#### 1.4.4 GetPrepared
- **As a** visitor
- **I want to** access an embedded Trello board
- **So that** I can prepare and plan for potential disease outbreaks
In future to replicat in app by full stack

#### 1.4.5 Vademos
- **As a** visitor
- **I want to** access a Vademos link
- **So that** I can retrieve external resources from the Vademos website

#### 1.4.6 TOM
- **As a** visitor
- **I want to** access a TOM link
- **So that** I can retrieve external resources from the TOM website

## 2. Signed-In Users (10 Countries in 3 Regions)

### 2.1 Authentication
- **As a** user from one of the 10 countries
- **I want to** sign in to the platform
- **So that** I can access region-specific data and tools

### 2.2 RISP (Risk Information Sharing Platform)
- **As a** signed-in user
- **I want to** view a map and dashboard with data from my region
- **So that** I can analyze risk information specific to my area

### 2.3 Data Input
- **As a** signed-in user
- **I want to** input data related to my country
- **So that** it can be stored and shared with relevant stakeholders

## 3. Data Flow
-RISP data is stored in AWS and it is used for analysis in FAST Report and RMT
```


