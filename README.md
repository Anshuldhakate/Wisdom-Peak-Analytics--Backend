# Job Application Management API

## Overview

This project is a RESTful API for managing job applications, built with Node.js, Express, and MongoDB. It allows for CRUD operations on job positions, applicants, and interview schedules.

## Prerequisites

- Node.js (v16 or later)
- MongoDB (local installation or cloud instance)
- Postman (for testing endpoints)

## Setup

### 1. Clone the Repository

      ```bash
      git clone https://github.com/anshul/job-application-api.git
      cd job-application-api

### 2. Install Dependencies
      Ensure you have Node.js installed, then run:
     ```bash
     npm install
     
### 3. Configure Environment Variables
      Create a .env file in the root of the project and add the following:
      env
      MONGO_URI=mongodb://localhost:27017/job-application-db
      PORT=5000
      MONGO_URI: The MongoDB connection string. Replace with your MongoDB instance URL if using a cloud service.
      PORT: The port number on which the server will run.
      
### 4. Run the Server
      Start the server using:
      ```bash
      npx nodemon server.js
      The server will run on http://localhost:5000.








      
