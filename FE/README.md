# URL Shortener

A simple, frontend-only URL shortener built with React, TypeScript, and Vite. This application allows users to create shortened URLs that redirect to their original destinations.

## Features

- 🔗 Create short URLs from long URLs
- 📋 Copy shortened URLs to clipboard with one click
- 🔄 Automatic redirection to original URLs
- 🎨 Clean and modern UI
- 📱 Responsive design
- 🔒 URL validation
- 💾 Local storage for URL persistence
- 🎯 Unique URL generation with collision prevention

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router DOM
- CSS3

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd url-shortner
```

2. Install dependencies:
```bash
# Using npm
npm install

# Using yarn
yarn install
```

3. Start the development server:
```bash
# Using npm
npm run dev

# Using yarn
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Enter a valid URL in the input field (must include http:// or https://)
2. Click the "Shorten" button
3. Your shortened URL will be displayed
4. Click the "Copy" button to copy the shortened URL to your clipboard
5. Share the shortened URL with others

## How It Works

- The application generates a unique identifier (UUID) for each URL
- The mapping between shortened URLs and original URLs is stored in the browser's localStorage
- When someone visits a shortened URL, they are automatically redirected to the original URL
- The application includes collision prevention to ensure each shortened URL is unique

## Limitations

Since this is a frontend-only implementation:
- URLs are only stored in the user's browser
- Data will be lost if the browser's localStorage is cleared
- Different users won't see each other's shortened URLs
- No analytics or tracking features

## Future Improvements

- Add backend integration for persistent storage
- Implement URL analytics
- Add custom URL slugs
- Add URL expiration
- Add QR code generation
- Add URL preview
- Add URL management dashboard

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 