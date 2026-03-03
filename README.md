# Obed - Personal Portfolio

This is the source code for my personal portfolio website. Originally built with pure HTML, CSS, and vanilla JavaScript, it has been migrated to **React** using **Vite** to establish a modern, modular, and maintainable codebase ready for future enhancements like a dynamic blog.

## Features

- **Component-Based Architecture**: The UI is broken down into structured, reusable React components (e.g., Hero, Navbar, Projects, Skills).
- **Client-Side Routing**: Smooth, fast navigation without full page reloads using `react-router-dom` (includes Home and Academic views).
- **Responsive Design**: Mobile-friendly and responsive layout utilizing custom CSS.
- **Fast Development Experience**: Powered by Vite for lightning-fast hot module replacement (HMR).

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- Standard CSS / Flexbox / Grid

## Prerequisites

To run this project, you will need to have [Node.js](https://nodejs.org/) (which includes `npm`) installed on your machine.

## Getting Started

### 1. Installation

Open your terminal, navigate to the project directory, and install the required dependencies:

```bash
npm install
```

### 2. Running the Development Server

To start the local development server:

```bash
npm run dev
```

Vite will provide a local URL (usually `http://localhost:5173/`). Open this link in your browser to view the application. The server will automatically reload when you save changes to the code.

### 3. Building for Production

When you are ready to deploy your site, you need to create an optimized production build:

```bash
npm run build
```

This command bundles your React code and CSS into highly optimized static files inside a new `dist/` directory. These are the files you will upload to your web host (like GitHub Pages, Vercel, or Netlify).

### 4. Previewing the Production Build

To test the compiled production build locally before deploying:

```bash
npm run preview
```
