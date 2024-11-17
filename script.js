document.addEventListener("DOMContentLoaded", () => {
    // Select the dropdowns and result card elements
    const categorySelect = document.getElementById("categorySelect");
    const difficultySelect = document.getElementById("difficultySelect");
    const resultCard = document.querySelector(".result-card");

    // Problem statements object containing ideas
    const problemStatements = {
        "Web Application": {
            "Beginner": [
                { title: "Responsive Web Page Design", description: "Create a static webpage that adjusts layout across devices using HTML and CSS." },
                { title: "Simple Portfolio Website", description: "Design a personal portfolio with HTML and CSS to showcase your skills and projects." },
                { title: "Product Landing Page", description: "Create a simple landing page for a product with a call-to-action." },
                { title: "Simple Blog Layout", description: "Design a blog page layout with basic sections for content." },
                { title: "CSS Grid Layout", description: "Create a webpage using CSS Grid to align different content sections." },
                { title: "Form Validation", description: "Build a contact form with client-side validation using JavaScript." },
                { title: "Online Store Layout", description: "Design a simple layout for an e-commerce homepage." },
                { title: "Image Gallery", description: "Create a responsive image gallery with hover effects." },
                { title: "Navigation Menu", description: "Design a multi-level navigation menu using HTML and CSS." },
                { title: "Newsletter Signup", description: "Build a signup form for a newsletter with form validation." }
            ],
            "Intermediate": [
                { title: "Dynamic Blog Platform", description: "Develop a blog website with user authentication and CRUD operations." },
                { title: "Weather Forecast App", description: "Create a weather app that fetches real-time data from an API." },
                { title: "Online Quiz Application", description: "Build a quiz platform where users can answer questions and get scores." },
                { title: "E-commerce Cart System", description: "Create a shopping cart system with add, remove, and checkout features." },
                { title: "Recipe Finder App", description: "Build an app that allows users to search for recipes based on ingredients." },
                { title: "Job Portal Website", description: "Create a job listing site where employers can post jobs and job seekers can apply." },
                { title: "Blog with Comments", description: "Develop a blog platform where users can post articles and leave comments." },
                { title: "User Feedback Form", description: "Build a form for gathering feedback with a dynamic response page." },
                { title: "Bookstore System", description: "Create a system to manage inventory, sales, and user reviews for a bookstore." },
                { title: "Task Management App", description: "Build an app to track tasks, set deadlines, and mark tasks as completed." }
            ],
            "Advanced": [
                { title: "E-commerce Platform with Payment Gateway", description: "Build a web store with product management, cart, and secure online payments." },
                { title: "Real-Time Chat Application", description: "Create a real-time messaging app using WebSockets or Firebase." },
                { title: "Social Media Platform", description: "Develop a platform where users can create profiles, post updates, and follow each other." },
                { title: "Video Streaming Service", description: "Build a video streaming site with user uploads, viewing, and rating." },
                { title: "Online Marketplace", description: "Create a marketplace where buyers and sellers can interact and transact." },
                { title: "Project Management Tool", description: "Build a tool for project tracking with user collaboration, task management, and timelines." },
                { title: "Real-Time Data Dashboard", description: "Create a dashboard that visualizes data in real time from multiple sources." },
                { title: "Online Learning Platform", description: "Build a platform with video lessons, quizzes, and user progress tracking." },
                { title: "Real-Time Notification System", description: "Develop a notification system for instant updates in web applications." },
                { title: "Subscription-Based Website", description: "Create a website where users can subscribe to access premium content." }
            ]
        },
        "Mobile App": {
            "Beginner": [
                { title: "Simple To-Do List App", description: "Create an app to add, update, and delete to-do items locally." },
                { title: "Note-Taking App", description: "Build a mobile app to take and organize notes." },
                { title: "Basic Calculator", description: "Design a simple calculator with basic arithmetic operations." },
                { title: "Flashcard App", description: "Create an app that allows users to create and review flashcards." },
                { title: "Alarm App", description: "Build an app that lets users set alarms with custom sounds." },
                { title: "Simple Stopwatch", description: "Design a stopwatch app that allows users to start, pause, and reset." },
                { title: "Currency Converter", description: "Build an app that converts currencies using real-time exchange rates." },
                { title: "Weather App", description: "Create an app that displays weather forecasts for a user’s location." },
                { title: "Expense Tracker", description: "Build an app to track personal expenses and show them in a chart." },
                { title: "Task Reminder", description: "Create an app to remind users of their tasks with notifications." }
            ],
            "Intermediate": [
                { title: "Location-Based Weather App", description: "Develop an app displaying weather updates based on the user’s location." },
                { title: "Chat Application", description: "Create a messaging app where users can send messages in real-time." },
                { title: "Fitness Tracker", description: "Build an app to track steps, calories burned, and other fitness metrics." },
                { title: "Recipe App", description: "Develop an app that displays recipes based on user preferences." },
                { title: "QR Code Scanner", description: "Build an app that scans and processes QR codes." },
                { title: "Expense Manager", description: "Create an app to track and categorize personal expenses." },
                { title: "Task Organizer", description: "Develop an app to manage tasks with due dates and priorities." },
                { title: "News Reader", description: "Build an app that displays the latest news based on user interests." },
                { title: "Movie Search App", description: "Create an app to search for movies and view information like trailers and reviews." },
                { title: "Music Player", description: "Develop an app that lets users listen to and organize their music." }
            ],
            "Advanced": [
                { title: "Real-Time Chat Application", description: "Build a chat app with user authentication and real-time messaging using Firebase." },
                { title: "Location-Based Services", description: "Develop an app that provides location-based services like nearby restaurants." },
                { title: "Voice Assistant App", description: "Create an app that can understand and process voice commands." },
                { title: "Photo Editor", description: "Build an app that allows users to edit and apply filters to their photos." },
                { title: "Ride-Hailing App", description: "Develop a ride-sharing app that connects drivers and riders." },
                { title: "E-Commerce Mobile App", description: "Create a mobile app for e-commerce with features like browsing, checkout, and payments." },
                { title: "Social Media App", description: "Develop a social media app where users can post content, follow others, and comment." },
                { title: "Fitness App with GPS", description: "Build an app that tracks outdoor activities using GPS and shows statistics." },
                { title: "Banking App", description: "Create a secure app for users to manage their bank accounts and transactions." },
                { title: "Gaming App", description: "Develop an app for simple gaming with scores, levels, and rewards." }
            ]
        },
        "Desktop Software": {
            "Beginner": [
                { title: "Basic Text Editor", description: "Develop a text editor with basic functionalities like open, edit, and save files." },
                { title: "Simple Calculator", description: "Design a desktop calculator for basic arithmetic operations." },
                { title: "File Organizer", description: "Create software to organize files into folders based on type." },
                { title: "Note Taking App", description: "Build a desktop app for creating and organizing notes." },
                { title: "To-Do List Application", description: "Develop a to-do list app for task management." },
                { title: "Address Book", description: "Create an address book app to store contact information." },
                { title: "Unit Converter", description: "Build an app that converts units such as distance, weight, and temperature." },
                { title: "Clock Application", description: "Develop a simple desktop clock that shows the current time." },
                { title: "Currency Converter", description: "Create software to convert currency amounts based on exchange rates." },
                { title: "File Compression Tool", description: "Build an app that compresses files into zip archives." }
            ],
            "Intermediate": [
                { title: "Inventory Management System", description: "Create software to track product stock, sales, and restocking requirements." },
                { title: "Personal Finance Manager", description: "Develop software for managing personal finances with charts and reports." },
                { title: "Library Management System", description: "Build a system to track books, users, and lending activities." },
                { title: "Hotel Booking System", description: "Create software for managing hotel room bookings and availability." },
                { title: "Employee Management System", description: "Develop a system to manage employee records, salaries, and leaves." },
                { title: "Expense Tracker", description: "Build software to track personal or business expenses with visual reports." },
                { title: "Ticket Booking System", description: "Create a system for booking movie or event tickets with seat selection." },
                { title: "Data Entry Form", description: "Build a form for inputting data into a database or spreadsheet." },
                { title: "Stock Market Tracker", description: "Develop software to track stock prices and show trends." },
                { title: "School Management System", description: "Create software to manage student records, grades, and attendance." }
            ],
            "Advanced": [
                { title: "Data Visualization Dashboard", description: "Build a desktop app to visualize large datasets with interactive charts and graphs." },
                { title: "Video Editing Software", description: "Develop software that allows users to edit videos with effects and transitions." },
                { title: "Customer Relationship Management", description: "Create a CRM system to manage client relations and sales data." },
                { title: "Project Management Tool", description: "Develop software to manage projects, timelines, and team collaboration." },
                { title: "3D Rendering Application", description: "Create software to render 3D models and scenes." },
                { title: "Real-Time Collaboration Tool", description: "Build a desktop app for collaborative work like shared document editing." },
                { title: "Document Management System", description: "Create software for managing large collections of digital documents." },
                { title: "Video Conferencing Tool", description: "Build a desktop app for real-time video calls and screen sharing." },
                { title: "Accounting Software", description: "Develop software to manage accounts, invoices, and transactions." },
                { title: "Enterprise Resource Planning System", description: "Create a comprehensive ERP system to manage various business processes." }
            ]
        }
    };

    // Function to get random problem from the selected category and difficulty
    function getRandomProblem(category, difficulty) {
        const problems = problemStatements[category] && problemStatements[category][difficulty];
        if (problems && problems.length > 0) {
            const randomIndex = Math.floor(Math.random() * problems.length);
            return problems[randomIndex];
        }
        return null;
    }

    // Function to update result card with selected category and difficulty
    function generateIdea() {
        const category = categorySelect.value;
        const difficulty = difficultySelect.value;

        if (category && difficulty) {
            const problem = getRandomProblem(category, difficulty);
            if (problem) {
                resultCard.querySelector("h2").textContent = problem.title;
                resultCard.querySelector("p").textContent = problem.description;
            } else {
                resultCard.querySelector("h2").textContent = "No idea found";
                resultCard.querySelector("p").textContent = "No matching problem found for this combination.";
            }
        } else {
            resultCard.querySelector("h2").textContent = "Incomplete Selection";
            resultCard.querySelector("p").textContent = "Please select both category and difficulty.";
        }
    }

    // Add event listener for the "Generate Idea" button
    document.querySelector(".generate-btn").addEventListener("click", generateIdea);
});
