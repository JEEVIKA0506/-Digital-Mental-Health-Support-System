# Project title 
Digital-Mental-Health-Support-System
# Problem Statement :
Students and individuals often experience stress, anxiety, and emotional challenges but lack an accessible platform to monitor their mental 
well-being and obtain timely support. There is a need for a digital system that enables mood tracking, self-assessment, and access to mental
health resources in a secure and user-friendly manner.
# PROJECT OVERVIEW
The Digital Mental Health Support System is a web-based application designed to support users in monitoring and improving their mental
well-being. The system allows users to track their daily moods, complete self-assessment questionnaires, maintain personal journals,
and access mental health resources and wellness tips.
The platform aims to create awareness about mental health and encourage healthy coping strategies through an easy-to-use digital environment.
It provides a secure space where users can regularly monitor their emotional state and view their progress over time.
# PROJECT OBJECTIVES
## Main Objective
To develop a secure and user-friendly Digital Mental Health Support System that helps users monitor their emotional well-being
and access mental health support resources.
## Specific Objectives
  1. Enable user registration and authentication.
  2. Track daily mood and emotional status.
  3. Conduct mental health self-assessment questionnaires.
  4. Provide wellness tips and mental health resources.
  5. Store mood history and assessment records.
  6. Generate user progress reports.
  7. Ensure privacy and security of user data.
  8. Promote mental health awareness.
#  MODULE LIST


## User Module

The User Module is responsible for providing functionalities that allow users to interact with the Digital Mental Health Support System. The key features include:

* User Registration
* User Login
* Profile Management
* Mood Tracking
* Self-Assessment
* Journal Management
* Progress Report Viewing

## Admin Module

The Admin Module is responsible for managing the overall system and ensuring smooth operation. The key features include:

* Admin Login
* User Management
* Mental Health Resource Management
* Wellness Tips Management
* Report Generation
* System Monitoring

# CRUD APIs
## User APIs
## Create
* Register User
* Add Journal Entry
* Record Mood
## Read
* View Profile
* View Mood History
* View Assessment Results
* View Tips
## Update
* Update Profile
* Update Journal Entry
## Delete
* Delete Journal Entry
* Delete User Account

# Table list
## User
| Field    | Type    |
| -------- | ------- |
| user_id  | INT     |
| name     | VARCHAR |
| email    | VARCHAR |
| password | VARCHAR |
| age      | INT     |
## Mood_Tracker
| Field   | Type    |
| ------- | ------- |
| mood_id | INT     |
| user_id | INT     |
| mood    | VARCHAR |
| date    | DATE    |
## Assessment
| Field         | Type |
| ------------- | ---- |
| assessment_id | INT  |
| user_id       | INT  |
| score         | INT  |
| date          | DATE |
## Journal
| Field      | Type |
| ---------- | ---- |
| journal_id | INT  |
| user_id    | INT  |
| content    | TEXT |
| date       | DATE |
## Tips
| Field       | Type    |
| ----------- | ------- |
| tip_id      | INT     |
| title       | VARCHAR |
| description | TEXT    |

# ER DIAGRAM DESIGN
## Entities
* USER
* MOOD_TRACKER
* ASSESSMENT
* JOURNAL
* TIPS
* ADMIN
## Relationships
* USER records MOOD_TRACKER
* USER takes ASSESSMENT
* USER writes JOURNAL
* ADMIN manages TIPS
* ADMIN manages USERS

# Use Case Diagram 
    +-------------------+
    |  Mental Health    |
    | Support System    |
    +-------------------+

    USER
      ├── Register
      ├── Login
      ├── Track Mood
      ├── Take Assessment
      ├── Write Journal
      ├── View Tips
      ├── View Reports
      └── Logout

    ADMIN
      ├── Login
      ├── Manage Users
      ├── Manage Tips
      ├── View Reports
      ├── Monitor Activities
      └── Logout

 # SQL SCHEMA CREATION

The SQL schema defines the database structure for the Digital Mental Health Support System. It includes tables for storing user information, mood records, assessments, journal entries, and wellness tips.

## User Table

```sql
CREATE TABLE User (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    age INT
);
```

## Mood_Tracker Table

```sql
CREATE TABLE Mood_Tracker (
    mood_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    mood VARCHAR(50),
    date DATE,
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);
```

## Assessment Table

```sql
CREATE TABLE Assessment (
    assessment_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    score INT,
    date DATE,
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);
```

## Journal Table

```sql
CREATE TABLE Journal (
    journal_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    content TEXT,
    date DATE,
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);
```

## Tips Table

```sql
CREATE TABLE Tips (
    tip_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    description TEXT
);
```

# PAGE LAYOUTS
## Home Page
* Welcome Message
* About System
* Login/Register Buttons
## Dashboard
* Mood Tracker
* Assessment Section
* Journal Section
* Tips Section
## Profile Page
* User Details
* Progress Report
## Admin Dashboard
* User Management
* Resource Management
* Reports

## UI SCREENS
 1. Login Screen
 2. Registration Screen
 3. User Dashboard
 4. Mood Tracking Screen
 5. Assessment Screen
 6. Journal Screen
 7. Tips Screen
 8. Profile Screen
 9. Admin Dashboard

# UI PROTOTYPE
## Navigation Flow     
    Home
     │
     ├── Login
     │     │
     │     └── Dashboard
     │            │
     │            ├── Mood Tracker
     │            ├── Assessment
     │            ├── Journal
     │            ├── Tips
     │            └── Profile
     │
     └── Register







