# React Multi-Page Application Demo (with Tailwind CSS)

This is a modern, responsive, and beautifully styled multi-page application built with React, React Router Dom (v6), and Tailwind CSS.

## Project Structure

- **src/main.jsx**: The entry point. We wrap our `<App />` with `<BrowserRouter>` here to enable routing across the entire app.
- **src/App.jsx**: The main component. It defines the `<Routes>` and `<Route>` configuration, mapping specific paths URL paths (like `/about`) to React Components (like `<About />`).
- **src/components/**: Reusable UI parts.
  - `Navbar.jsx`: A responsive navigation bar built with Tailwind CSS. It features a mobile menu and active link highlighting.
- **src/pages/**: The individual page components.
  - `Home.jsx`, `About.jsx`, `Contact.jsx`: Content for each route, styled with utility-first CSS for a premium look.
- **src/index.css**: Contains Tailwind directives and custom global styles/animations.
- **tailwind.config.js**: Configuration for Tailwind CSS, including custom colors, fonts, and animations.

## Key Concepts

### 1. Tailwind CSS Integration

Instead of traditional CSS files, we use Tailwind's utility classes directly in our JSX. This allows for rapid development and consistent design.

### 2. React Router Dom

- `BrowserRouter`: Enables client-side routing.
- `Routes` & `Route`: Define the mapping between URL paths and components.
- `NavLink`: Used for navigation links that need active state styling.
- `Link`: Used for standard navigation without page reloads.

## Styling Highlights

- **Gradients**: Used for text and buttons to create a modern aesthetic.
- **Animations**: Custom `fade-in-up`, `slide-in-right`, and `zoom-in` animations added via `tailwind.config.js`.
- **Responsiveness**: The layout adapts seamlessly to mobile devices using Tailwind's responsive prefixes (e.g., `md:hidden`, `lg:px-8`).
- **Dark Mode**: The application features a sleek dark theme.

## Running the App

1. Open a terminal in this folder.
2. Run `npm install` (to install dependencies).
3. Run `npm run dev` to start the local development server.
