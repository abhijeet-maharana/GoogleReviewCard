# NFC Google Review Card Generator

## Overview

This is a full-stack web application that generates NFC-enabled Google Review cards with professional design. The application allows users to create dual-sided cards with QR codes and NFC functionality for businesses to collect customer reviews. Built with React frontend and Express.js backend, it features a modern UI with 3D card flip animations and comprehensive design tools.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **UI Framework**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development Server**: tsx for TypeScript execution
- **Production Build**: esbuild for efficient bundling

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (configured but not actively used yet)
- **Schema**: Defined in shared directory for type safety
- **Migrations**: Managed through Drizzle Kit

## Key Components

### Core Features
1. **NFC Card Designer**: Interactive 3D card component with flip animations
2. **Google Branding**: Authentic Google logo and color scheme implementation
3. **QR Code Generation**: Custom QR code component for review links
4. **Card Preview**: Real-time preview with front/back side visualization
5. **Download Functionality**: Export capabilities for print-ready files

### UI Components
- Complete shadcn/ui component library integration
- Custom Google logo component with brand colors
- 3D card animation system with CSS transforms
- Responsive design for mobile and desktop

### Data Storage
- In-memory storage implementation (MemStorage class)
- User management with basic CRUD operations
- Prepared for PostgreSQL integration via Drizzle ORM
- Type-safe schema definitions with Zod validation

## Data Flow

1. **User Interaction**: Users interact with the card designer interface
2. **State Management**: TanStack Query manages application state and API calls
3. **Card Generation**: React components render the card design in real-time
4. **Export Process**: Download functionality generates print-ready files
5. **Data Persistence**: User preferences and card designs stored via API

## External Dependencies

### Frontend Dependencies
- **UI Framework**: Radix UI primitives for accessible components
- **Animation**: Embla Carousel for interactive elements
- **Date Handling**: date-fns for date manipulation
- **Form Management**: React Hook Form with Hookform resolvers
- **Icons**: Lucide React for consistent iconography

### Backend Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connectivity
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Development**: tsx for TypeScript execution in development

### Development Tools
- **Build System**: Vite with React plugin
- **Code Quality**: TypeScript for type safety
- **Styling**: PostCSS with Tailwind CSS and Autoprefixer
- **Replit Integration**: Custom plugins for development environment

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20 runtime
- **Database**: PostgreSQL 16 module enabled
- **Hot Reload**: Vite development server with HMR
- **Port Configuration**: Application runs on port 5000

### Production Build
- **Frontend**: Vite build process generating optimized static assets
- **Backend**: esbuild bundling server code for Node.js execution
- **Asset Serving**: Express.js serving static files from dist directory
- **Environment**: Production mode with optimized performance

### Deployment Configuration
- **Target**: Autoscale deployment on Replit
- **Build Command**: `npm run build` for production assets
- **Start Command**: `npm run start` for production server
- **Port Mapping**: Internal port 5000 mapped to external port 80

## Changelog

Changelog:
- June 25, 2025. Initial setup
- June 25, 2025. Updated card display to show both sides side by side without animations
- June 25, 2025. Added HTML2Canvas for image download functionality
- June 25, 2025. Implemented dual PNG download feature for PVC card printing

## User Preferences

Preferred communication style: Simple, everyday language.