# ReactJS Frontend Application (Admin)

## Project Overview

This is a React.js frontend application built using TypeScript, Axios, Redux, TailwindCSS, and custom hooks. It follows best practices such as lazy loading to enhance performance and maintainability.

## Tech Stack

- **React.js** - Component-based UI library
- **TypeScript** - Strongly typed JavaScript
- **Axios** - HTTP client for API requests
- **Redux** - State management
- **TailwindCSS** - Utility-first CSS framework
- **Custom Hooks** - Encapsulated reusable logic
- **Lazy Loading** - Performance optimization for component rendering

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone htt<repo-url>
   cd <repo-name>
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```

## Build for Production

To create an optimized production build, run:

```sh
npm run build
# or
yarn build
```

## 📡 API Configuration

Set up environment variables in a `.env` file:

```
VITE_API_URL=backend_base_url
```

`

## Note

To register as an admin, you must include the "admin_key" in the query parameters of the registration (signup) page. This is a security measure to ensure that only authorized individuals can register as admins. The value of "admin_key" must match the one defined in the backend environment variables.

## Feel free to contact me if you have any queries

rameesyounus49@gmail.com
