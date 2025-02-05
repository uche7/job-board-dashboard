# Job Board Dashboard
A modern, responsive job board application built with Next.js, Material UI, and TailwindCSS. Features include job listings, search and filter functionality, job details pages, and an interactive application form with theme persistence.

# Features
- Job Listings: Browse paginated job listings with company logos, titles, locations, and salaries.

- Search & Filter: Search by job title, location, and salary range.

- Job Details: View detailed job descriptions and company information.

- Application Form: Interactive form with real-time validation and file upload.

- Theme Toggle: Switch between light and dark modes with persistent theme settings.

- Responsive Design: Fully optimized for mobile, tablet, and desktop.

# Setup Instructions
- Prerequisites
- Node.js (v18 or higher)

npm or yarn

# Installation
1. Clone the repository:
- git clone https://github.com/your-username/job-board-dashboard.git
- cd job-board-dashboard

2. Install dependencies:
- npm install

3. Run the application:
- npm run dev

4. Open the application in your browser:
- http://localhost:3000

# Project Structure
job-board-dashboard/
├── components/          # Reusable components
├── context/             # Theme and global state management
├── pages/               # Application pages
│   ├── api/             # API routes
│   ├── job/             # Job details pages
│   └── index.tsx        # Home page
├── services/            # API service functions
├── styles/              # Global styles
├── types/               # TypeScript types
├── utils/               # Utility functions
├── .env.example         # Environment variables template
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # TailwindCSS configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation

# Technologies Used
1. Frontend:

 Next.js (React framework)

 Material UI (Component library)

 TailwindCSS (Utility-first CSS framework)

 TypeScript (Static typing)

 React Hook Form (Form management)

 Yup (Form validation)

 Framer Motion (Animations)

 React Toastify (Notifications)

2. State Management:

 React Context API (Theme management)

3. API:

 Remotive API (Job listings)

# Theme Persistence
The application features a light/dark mode toggle that persists across page reloads and sessions. The theme preference is stored in localStorage and automatically applied to all pages and components.

# How It Works
1. Theme Context:

 The ThemeContext manages the current theme (light or dark).

 The theme is persisted in localStorage and retrieved on page load.

2. Material UI Integration:

 The theme is passed to Material UI's ThemeProvider, ensuring all MUI components adapt to the current theme.

3. Custom Styling:

 TailwindCSS classes and custom styles are dynamically applied based on the current theme.

# Additional Features
# Job Application Form

1. Fields:

 Full Name

 Email Address (with validation)

 Resume Upload (PDF/DOC)

 Cover Letter (optional)

2. Validation:

 Real-time validation using Yup schema.

 Error messages for invalid inputs.

3. Submission:

 Form data is logged to the console.

 Success toast notification on submission.

# Pagination
 Jobs are paginated with 20 items per page.

 Users can navigate between pages using "Previous" and "Next" buttons.

# Responsive Design
 Fully optimized for mobile, tablet, and desktop.

 Uses TailwindCSS's responsive utilities for layout adjustments.

# Acknowledgments
 Remotive API for providing job listings.

 Material UI for the component library and theming system.

 TailwindCSS for utility-first CSS.

# Contact
For questions or feedback, please reach out:

 Email: [nnajioforuchenna063@gmail.com](mailto:nnajioforuchenna063@gmail.com)
)

 GitHub: [https://github.com/uche7](https://github.com/uche7)


Job Board Dashboard by Nnajiofor Uchenna Franklin! 🚀
