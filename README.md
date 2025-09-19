# Aureate

Elevated E-Commerce Design for Gen Z Brands

We create elevated digital experiences for e-commerce brands who refuse to look like everyone else. Clean design, authentic storytelling, zero spam tactics.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code quality issues

## Project Structure

```
src/
├── components/          # Reusable React components
├── pages/              # Page components
├── assets/             # Static assets (images, icons, etc.)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and configurations
├── main.tsx            # Application entry point
└── App.tsx             # Main application component
```

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Headless UI components
- **React Router** - Client-side routing

## Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.