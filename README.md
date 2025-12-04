# Next.js Blog Project

A comprehensive Next.js application demonstrating various rendering techniques including CSR, SSR, SSG, and ISR with the App Router.

## 🚀 Deployed Link
https://github.com/pshemssa/next-sample-app/tree/master 

## 📋 Project Overview

This project showcases Next.js fundamentals including:
- App Router architecture
- Layouts and nested layouts
- Multiple rendering techniques
- Tailwind CSS styling
- TypeScript integration

## 🏗️ Project Structure

```
src/app/
├── layout.tsx 
├── page.tsx        # Main layout with      # 
├── about/
│   └── page.tsx       # About page (SSR)
└── blog/
    ├── layout.tsx     # Blog nested layout with \
    ├── page.tsx       # Blog listing (SSG)
    └── [id]/
        └── page.tsx   # Blog detail page (ISR)
```

## 🎯 Rendering Techniques Used

### 1. Client-Side Rendering (CSR)
- **Location**: Home page (`/`)
- **Implementation**: Real-time clock component that updates every second
- **Features**: Uses `"use client"` directive and React hooks

### 2. Server-Side Rendering (SSR)
- **Location**: About page (`/about`)
- **Implementation**: Fetches author information from JSONPlaceholder API
- **Features**: Uses `cache: 'no-store'` to ensure fresh data on each request

### 3. Static Site Generation (SSG)
- **Location**: Blog listing page (`/blog`)
- **Implementation**: Pre-renders blog posts at build time
- **Features**: Uses `cache: 'force-cache'` for optimal performance

### 4. Incremental Static Regeneration (ISR)
- **Location**: Blog detail pages (`/blog/[id]`)
- **Implementation**: Static generation with 60-second revalidation
- **Features**: Uses `next: { revalidate: 60 }` for automatic updates

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Nested Layouts**: Blog section has its own layout with sidebar
- **Dynamic Routing**: Blog posts accessible via `/blog/[id]`
- **Error Handling**: Graceful fallbacks for API failures
- **TypeScript**: Full type safety throughout the application

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pshemssa/next-sample-app/

cd next-sample-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏃‍♂️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production


## 🌐 API Endpoints Used

- **User Data**: `https://jsonplaceholder.typicode.com/users/1`
- **Blog Posts**: `https://jsonplaceholder.typicode.com/posts`
- **Individual Post**: `https://jsonplaceholder.typicode.com/posts/[id]`

## 📱 Pages Overview

### Home (`/`)
- Welcome message
- Live clock component (CSR)
- Clean, centered layout

### About (`/about`)
- Author information fetched server-side
- Detailed user profile display
- Error handling for API failures

### Blog (`/blog`)
- List of blog posts (first 10)
- Card-based layout
- Links to individual posts
- Sidebar with categories

### Blog Detail (`/blog/[id]`)
- Full post content
- Author information
- ISR with 60-second revalidation
- Back navigation

## 🎨 Styling

- **Framework**: Tailwind CSS v4
- **Fonts**: Geist Sans and Geist Mono
- **Theme**: Light mode with clean, modern design
- **Responsive**: Mobile-first responsive design

## 🚀 Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

Alternatively, you can deploy to other platforms that support Next.js.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)


