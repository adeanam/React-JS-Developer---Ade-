# ReactJSDeveloper-Ade
# Version v1.0.9
## Table of Contents

* [Introduction](#introduction)
* [Live Demo](#live-demo)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Setup and Installation](#setup-and-installation)
* [Project Structure](#project-structure)
* [Error Handling](#error-handling)
* [UX Practices](#ux-practices)
* [Testing](#testing)
* [Mobile View](#mobile-view)
* [Contact](#contact)

---

## Introduction

This project is a solution to the React JS Developer technical assessment. It demonstrates my ability to build a React application using TypeScript, deploy it, and adhere to best practices for code quality and user experience within a given set of requirements.

The primary goal of this application is to make a application to fetch user and their repository data up to 5 then when clicked, it will dropdown and show list of open or public repository. Beside that design the simple UI / UX to make more comfortable to use and watch.

## Live Demo

You can access a live version of this application here:

**[https://adeanam.github.io/ReactJSDeveloper-Ade/]**
## Features

This application includes the following functionalities:

* **Search Repository:** Search and type from menu bar then press or click enter, then the feature will show result of searched username and their repository.

## Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **TypeScript:** A strongly typed superset of JavaScript that compiles to plain JavaScript.
* **Vite:** A fast build tool for modern web projects.
* **Tailwind CSS:** For simple and fast styling the application.

## Setup and Installation

Follow these steps to get the project up and running on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/adeanam/ReactJSDeveloper-Ade.git
    cd ReactJSDeveloper-Ade
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be accessible at `http://localhost:5173` (or another port as indicated in your terminal).

4.  **Build for production (optional, for local testing of build):**
    ```bash
    npm run build
    ```
    This will create a `dist` folder with the production-ready build, then:
    ```bash
    npm run preview
    ```
    The application will be accessible at `http://localhost:4173` (or another port as indicated in your terminal).

## Project Structure

The project follows a standard Vite/React application structure. Due to the time constraint of a 1-day assessment, the component modularity is focused on functionality rather than strict Atomic Design principles.
```
ReactJSDeveloper-Ade
├── public/                               # Static assets
├── src/                                  # Source code
│   ├── assets/                           # Static assets like images
│   ├── components/                       # Reusable UI components
│   │   ├── detail_search_component.tsx   # Card from search component
│   │   ├── footer_component.tsx          # Footer component
│   │   └── search_component.tsx          # Search bar component
│   ├── helper/                           # Helper functions or utilities
│   │   ├── api_helper.tsx                # Helper for preparing API
│   ├── interface/                        # TypeScript interfaces/types
│   │   ├── i_repository.tsx              # Interface class for repository
│   │   └── i_users.tsx                   # Interface class for users
│   ├── pages/                            # Page-level components
│   │   └── home_page.tsx                 # Main page of project
│   ├── services/                         # Service modules for API calls or business logic
│   │   └── octo_services.tsx             # Service to call API from github
│   ├── App.css                           # Global application styles
│   ├── App.tsx                           # Main application component
│   ├── index.css                         # Root CSS file
│   └── main.tsx                          # Entry point for the React application
├── .env.local                            # Local environment variables
├── .env.production                       # Production environment variables
├── .gitignore                            # Files/folders to be ignored by Git
├── eslint.config.js                      # ESLint configuration
├── index.html                            # Main HTML file
├── package-lock.json                     # Dependency lock file
├── package.json                          # Project dependencies and scripts
├── README.md                             # Project documentation (this file)
├── tsconfig.app.json                     # TypeScript configuration for application code
├── tsconfig.json                         # Base TypeScript configuration
├── tsconfig.node.json                    # TypeScript configuration for Node.js environment
└── vite.config.ts                        # Vite build configuration
```

## Error Handling

The application implements basic error handling for scenarios such as:

* **Error failed fetch API:** Displaying user-friendly messages for failed data fetches through notification.

## UX Practices

Good User Experience (UX) practices have been considered in the development:

* **Loading States:** Visual indicators (e.g., skeleton loaders) are provided when data is being fetched or an action is in progress to inform the user.
* **Keyboard Accessibility:** Interactive elements (e.g., buttons, form inputs) are navigable and operable using keyboard controls (Enter, Space, ESC).

## Testing

Due to **my limited personal working time of 1 day** for this assessment, I prioritized delivering the core functionality and meeting all "Requirements". Therefore, dedicated unit and integration tests could not be fully implemented in this submission. However, I am proficient in writing tests using Vitest/Jest and React Testing Library, and would normally implement them in a production environment.

## Mobile View

The application has been designed with responsiveness in mind to ensure a proper viewing experience across different devices, from desktop to mobile phones. Responsive design is achieved using Tailwind CSS utilities.

## Contact

If you have any questions or feedback, feel free to reach out:

**Ade**
adeca299@gmail.com
https://www.linkedin.com/in/adeanam/
