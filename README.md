# Task Manager Web Application
This is a **Full Stack Task Manager** application built with **C# .NET Web API** (backend) and **Angular** (frontend). The application allows users to:

- Add tasks with a title and priority (High, Medium, Low)  
- View a list of existing tasks  
- Mark a task as completed  
- Filter tasks by priority or completion status  

---

## **Project Structure**
askManagerProject/
- ├── backend/ ← C# .NET Web API project
- ├── frontend/ ← Angular project
- ├── README.md ← This file
- ├── DEBUG_NOTES.txt ← Debugging documentation
- ├── answers.txt ← General development questions

- 
---

## **Prerequisites**

- **Backend**: [.NET 6 SDK or later](https://dotnet.microsoft.com/en-us/download/dotnet)  
- **Frontend**: [Node.js & npm](https://nodejs.org/)  
- **Angular CLI**: Install globally using:
npm install -g @angular/cli

## **Running the Backend**

1. Open Visual Studio Community.
2. Open the backend folder as a project/solution.
3. Restore dependencies (if prompted).
4. Run the API (usually runs on https://localhost:5001 or http://localhost:5000).
5. Test endpoints using Postman or a browser:
- GET /tasks → Get all tasks
- POST /tasks → Add a task
- PUT /tasks/{id} → Mark task as completed

# **Running the Frontend**
1. Open Visual Studio Code.
2. Open the frontend folder.
3. Install dependencies:
- npm install
4. Run the Angular app:
- ng serve
Open your browser at http://localhost:4200. The frontend should fetch tasks from the backend automatically.

Note: Ensure the backend API is running before starting the frontend.

## **Testing**
Backend:
- A unit test is provided to verify adding a task.
- Run tests from Visual Studio Test Explorer.
Frontend:
- A basic test ensures tasks are displayed after retrieval.
- Run tests using:
 - -ng test

# **Debugging Notes**

Refer to DEBUG_NOTES.txt for a detailed list of bugs fixed in the backend and frontend, including:
- Problem description
- How it was fixed

## **General Development Questions**
Refer to answers.txt for answers to:
1. API integration vs logic errors
2. Troubleshooting non-responsive API calls
3. Importance of frontend/backend separation
4. Testing frameworks used
5. Maintaining code over time

## **GitHub Repository**
All project files (frontend + backend) are in this repository. Clone it with:
- git clone <your-repo-url>

## **Author**
Name: Ogotlhe Tsheko
Role: Full Stack Developer Intern
