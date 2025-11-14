# NextJS Assignment - CSI 331 Web Development

**Author:** Farrar, Landon  
**Assignment:** Assignment 8 - NextJS with React Components  
**Course:** CSI 331 Web Development  

## Project Description

This is a NextJS application featuring three main components:

1. **Counter Components** - Two interactive counters with different increment values (+1 and +2), custom button colors, and reset functionality when exceeding 10
2. **GitHub Repository Link** - Link to the project's source code repository
3. **FakeStore API Integration** - A searchable product interface using the FakeStore API with real-time filtering

## Live Demo

- **Production URL:** `331vms.cs.montana.edu:3017`
- **Store Page:** `331vms.cs.montana.edu:3017/store`

## GitHub Repository

[View Source Code](https://github.com/lfarrar48/csci-331-web-development-NextJS)

## Technology Stack

- **NextJS 16** - React framework for production
- **React 19** - Frontend library with hooks (useState, useEffect)
- **Tailwind CSS v4** - Utility-first CSS framework for styling
- **TypeScript** - Type-safe JavaScript
- **FakeStore API** - External API for product data

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/lfarrar48/csci-331-web-development-NextJS.git
cd csci-331-web-development-NextJS
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Production Deployment

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

The application will run on port 3017 for production deployment.

## Assignment Requirements

✅ **Counter Components (4 points)**
- Button to increment and display current count
- Different increment amounts (+1 and +2) 
- Reset to 0 when exceeding 10
- Props for button background color styling

✅ **GitHub Component (2 points)**  
- Paragraph with link to GitHub repository
- Properly structured React site with .gitignore

✅ **FakeStore API Component (3 points)**
- Table displays 20 products with title, image, price
- Search bar filters products by substring matching

## Final Project

For my final project, I am building the Montana State Soccer club team website with an emphasis on Tailwind CSS integration. This project will showcase modern web design principles using Tailwind's utility-first approach to create a responsive, professional team website with player profiles, game schedules, and team statistics.
