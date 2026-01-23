# Web3 Delight 🚀

A futuristic Web3 YouTube-like application built with Next.js, TypeScript, Tailwind CSS, and Express. Features glassmorphism effects, smooth scroll animations, and interactive hover effects.

## Features

- ✨ **Futuristic UI** - Glassmorphism effects with see-through elements
- 🎬 **YouTube-like Interface** - Video grid and player interface
- 🎨 **Smooth Animations** - Scroll effects and parallax animations
- 🖱️ **Interactive Hovers** - Cool hover effects throughout
- 🔐 **Authentication** - Express backend with JWT authentication
- 📱 **Responsive Design** - Works on all devices

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express, JWT, bcryptjs
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server (runs both Next.js and Express):

```bash
npm run dev:all
```

Or run them separately:

Terminal 1 (Next.js):

```bash
npm run dev
```

Terminal 2 (Express Server):

```bash
npm run server
```

### Demo Accounts

You can use these dummy accounts to log in:

- **Email**: `user@web3delight.com`
- **Password**: `web3pass`

- **Email**: `dev@web3delight.com`
- **Password**: `web3pass`

## Project Structure

```
web3-delight/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── VideoGrid.tsx   # Video grid component
│   ├── VideoCard.tsx   # Individual video card
│   └── LoginModal.tsx  # Authentication modal
├── server/             # Express backend
│   └── index.js        # Server with auth endpoints
└── package.json        # Dependencies
```

## Available Scripts

- `npm run dev` - Start Next.js development server
- `npm run server` - Start Express backend server
- `npm run dev:all` - Run both servers concurrently
- `npm run build` - Build for production
- `npm start` - Start production server

## Features in Detail

### Glassmorphism Effects

- See-through elements with backdrop blur
- Subtle borders and shadows
- Modern, futuristic aesthetic

### Scroll Animations

- Parallax effects on scroll
- Fade-in animations for content
- Smooth transitions

### Hover Effects

- Scale transformations
- Glow effects on interactive elements
- Color transitions
- Play button animations on video cards

## Development

The application uses:

- **Framer Motion** for animations
- **Tailwind CSS** for styling
- **Express** for authentication API
- **JWT** for token-based authentication

## License

MIT


