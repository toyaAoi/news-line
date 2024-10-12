## Description

This project is a simple React web application that displays recent news
articles fetched from an external news API. The app utilizes a backend server to
achieve two goals:

1. **Secure the API key:** The backend handles API requests on behalf of the
   frontend, ensuring that sensitive API keys are never exposed to the client.
2. **Cache API responses:** To reduce the number of API calls and prevent
   excessive requests to the news API, the backend caches the response for a
   specified duration. This improves performance and decreases the likelihood of
   hitting rate limits.

## Live Sites

- Frontend: https://news-line-client.onrender.com/
- Backend: https://news-line.onrender.com/api/top-headlines

## Technologies Used

- **Frontend:** React
  - Styling: Tailwind
  - Http Requests: axios
- **Backend:** Node.js, Express,
  - Caching: node-cache
  - Async Errors: express-async-errors

## Installation

### 1. Clone the repository

First, clone the repository to your local machine.

```bash
  git clone https://github.com/toyaAoi/news-line.git
```

### 2. Backend Setup

Navigate to the `server` directory and install the dependencies.

```bash
  cd server
  pnpm install

  # or if you're using npm
  npm install
```

Create a `.env` and add environment variables

```env
  PORT=your_desired_port
  API_KEY=your_api_key
```

Start the backend.

```bash
  pnpm run start

  # or
  npm run start
```

### 3. Frontend Setup

Navigate to the `client` directory and install the dependencies.

```bash
  cd client
  pnpm install

  # or
  npm install
```

Configure `vite.config.js`:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Replace the url with your backend URL
      "/api": "http://localhost:3000/",
    },
  },
});
```

Then run

```bash
  pnpm run dev

  # or
  npm run dev
```
