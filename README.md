# 🎨 Tour & Travel Project

Welcome to the **Tour & Travel App** project! This is a clean, interactive, and responsive web application built to master component architecture, component decomposition, and props management in React using Tailwind CSS for rapid styling.

---

# 🌍 Tour & Travel App

A modern, responsive React application for showcasing holiday travel packages. Built with React, Vite, React Router, and styled with CSS.

> **Master component architecture, props drilling, and responsive design patterns**

---

## 🛠️ Tech Stack
* **Framework:** React.js (Vite Template)
* **Styling:** CSS 
* **Language:** JavaScript (ES6+), HTML, CSS
* **Hosting:** Vercel

---

## ✨ Features

- 🎨 **Modular Components** – 5+ reusable, independent UI components
- 🔄 **Props Drilling** – Seamless data flow through component hierarchy
- 📱 **Fully Responsive** – Mobile, tablet, and desktop optimized
- ⚡ **Lightning Fast** – Vite-powered development with Hot Module Replacement (HMR)
- 🎯 **Modern Styling** – CSS for rapid, utility-first design
- 🛣️ **React Router** – Multi-page navigation and routing
- 🚀 **Production Ready** – Clean, maintainable, scalable codebase

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | ^19.2.7 | UI framework |
| **Vite** | ^8.1.1 | Build tool & dev server |
| **React Router DOM** | ^7.18.1 | Client-side routing |
| **CSS** | ^3.7.18 | Utility-first styling |
| **JavaScript** | ES6+ | Language |
| **oxlint** | ^1.71.0 | Code linting |

---

## 📂 Project Structure

```
Tour_Travel_Project/
├── index.html              # HTML entry point
├── vercel.json             # Vercel
├── package.json            # Project dependencies and scripts
├── package-lock.json 
├── vite.config.js          # Vite configuration
├── public/                 # Static assets
├── src/
│   ├── App.css             # Main app styles
│   ├── App.jsx             # Main app component
│   ├── index.css           # Global styles
│   ├── main.jsx            # Application entry point
│   ├── Components/         # Reusable UI components
│   │   ├── AboutUs.css
│   │   ├── AboutUs.jsx
│   │   ├── ContactForm.css
│   │   ├── ContactForm.jsx
│   │   ├── Destination.css
│   │   ├── Destination.jsx
│   │   ├── DestinationData.jsx
│   │   ├── Footer.css
│   │   ├── Footer.jsx
│   │   ├── Hero.css
│   │   ├── Hero.jsx
│   │   ├── MenuItem.jsx
│   │   ├── NavBar.css
│   │   ├── NavBar.jsx
│   │   ├── Trip.css
│   │   ├── Trip.jsx
│   │   └── TripData.jsx
│   └── Routes/            # Page-level route components
│       ├── About.jsx
│       ├── Contact.jsx
│       ├── Home.jsx
│       └── Services.jsx
├── Router/                # Additional router-based app folder
│   ├── Dockerfile
│   ├── package.json
│   ├── README.md
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── app/
│   │   ├── app.css
│   │   ├── root.tsx
│   │   ├── routes.ts
│   │   ├── routes/
│   │   │   └── home.tsx
│   │   └── welcome/
│   │       └── welcome.tsx
│   └── public/
└── README.md              # This file
```

---

## 🎯 Component Overview

### Core Components

| Component | Purpose |
|-----------|---------|
| **NavBar** | Displays the top navigation bar with menu links and a mobile toggle. |
| **Hero** | Shows the landing banner section with image, title, description, and CTA button. |
| **Trip** | Renders the recent trips section with multiple trip cards. |
| **TripData** | Displays an individual trip card with image, heading, and details. |
| **Destination** | Shows featured destinations with image-based content blocks. |
| **DestinationData** | Displays a single destination section with text and images. |
| **AboutUs** | Presents the company history, mission, and vision. |
| **Footer** | Displays the page footer content. |
| **ContactForm** | Provides a contact form UI for user inquiries. |

### Route Pages

- **Home** – Main landing page combining hero, trips, and destinations
- **About** – Company information section
- **Services** – Service-related page content
- **Contact** – Contact page with a form

---

## 📦 How to Setup & Build This Project From Scratch

Every time I initialize a new React + Tailwind CSS project, I follow these exact standard steps. You can use this guide to recreate or understand the workspace structure:

### Step 1: Initialize Vite Project
Run the following command in your terminal:
```bash
npm create vite@latest
```

## During the prompt configuration, fill out the selections exactly like this:

​Proceed? y 

​Project Name: Your_Project_Name 
​
Package Name: your_package_name ​

Select a framework: React ​

Select a variant: JavaScript 

​With oxy? No ​

Install with npm? Yes 

---

## 💻 How to Run the Project Local Environment 

​If you want to pull this project and run it again locally, simply execute these commands:

```
# Navigate to the project folder
cd Bg_Changer_Project

# Start the local development server
npm run dev

```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** package manager
- Basic knowledge of React and JavaScript

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/MehmoodCoder/Tour_Travel_App.git
cd Tour_Travel_App/Tour_Travel_Project
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open in browser**

Project Link : [Tuor App](https://tour-travel-app-ruby.vercel.app)


---

## 📜 Available Scripts

### Development
```bash
npm run dev
```

Run oxlint to check code quality and style.

---

## 🎨 Styling Guide

This project uses ** CSS ** for all styling.

---

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Connect your GitHub repository
5. Connect the exact project folder containing `package.json` to avoid nested directory issues
6. Vercel automatically detects Vite settings
7. Toggle the "Build Command" and write `npm run build` manually to override it
8. Click "Deploy"

---

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)

---

## 💡 Core Concepts Covered

- ✅ **Component Decomposition** – Breaking complex UIs into reusable pieces
- ✅ **Props Management** – Passing data and functions through component trees
- ✅ **React Hooks** – State management with hooks
- ✅ **Conditional Rendering** – Showing/hiding content based on conditions
- ✅ **List Rendering** – Displaying dynamic data with `.map()`
- ✅ **CSS-in-JS & Utility Classes** – Styling with Tailwind
- ✅ **Responsive Design** – Mobile-first approach with media queries
- ✅ **Client-Side Routing** – Multi-page navigation with React Router

---

## 👤 Author

**MehmoodCoder**

- 🔗 GitHub: [github.com/MehmoodCoder](https://github.com/MehmoodCoder)
- 🌐 Portfolio: [Your Portfolio Link]

---

## 📄 License

This project is open source and available under the **MIT License**.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 Changelog

### v1.0.0 (Initial Release)
- ✨ Responsive homepage with hero section
- 🎯 Trip and destination showcases
- 📄 Multi-page routing with React Router
- 💅 CSS styling
- 📱 Mobile-responsive design

---

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Routed with [React Router](https://reactrouter.com)

---

**Happy coding without chai ! ☕**





