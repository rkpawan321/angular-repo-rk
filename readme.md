# Angular CLI Commands Reference

## Prerequisites

### Install Angular CLI Globally
```bash
# Install the Angular CLI tool globally on your system
npm install -g @angular/cli
```

### Check Angular CLI Version
```bash
# Verify Angular CLI installation and check version
ng --version
```

## Project Creation

### Create New Angular Application
```bash
# Create a basic Angular application
ng new first-ng-app

# Create app with inline styles and templates (no separate .html/.css files)
ng new first-ng-app --inline-styles --inline-template

# Create app with specific options
ng new my-app --routing --style=scss --skip-git
```

### Navigate to Project Directory
```bash
# Change to the newly created project directory
cd first-ng-app
```

## Development Server

### Start Development Server
```bash
# Start the development server (runs on http://localhost:4200)
npm start

# Alternative way to start the server
ng serve

# Start server on a different port
ng serve --port 4300

# Start server and automatically open browser
ng serve --open
```

## Component Generation

### Generate Components
```bash
# Generate a component (short form) - creates in src/app folder
ng g c header

# Generate a component (full form)
ng generate component header

# Generate component in a specific directory structure
ng g c components/header

# Generate component for routing/pages
ng g c home

# Generate component in nested folder
ng g c components/greeting

# Generate component with specific options
ng g c my-component --skip-tests --inline-style
```

### Generate Other Components
```bash
# Generate a counter component
ng g c counter

# Generate a greeting component  
ng g c greeting

# Generate a todos component
ng g c todos

# Generate a todo-item component in todos folder
ng g c components/todo-item
```

## Service Generation

### Generate Services
```bash
# Generate a service in services folder
ng g service services/todos

# Generate service (full form)
ng generate service services/data

# Generate service with specific options
ng g service my-service --skip-tests
```

## Directive Generation

### Generate Custom Directives
```bash
# Generate a custom directive
ng g directive directives/highlight-completed-todo

# Generate directive (full form)
ng generate directive my-directive

# Generate directive with specific options
ng g directive my-directive --skip-tests
```

## Pipe Generation

### Generate Custom Pipes
```bash
# Generate a custom pipe
ng g pipe pipes/filter-todos

# Generate pipe (full form)
ng generate pipe my-pipe

# Generate pipe with specific options
ng g pipe my-pipe --skip-tests
```

## Build Commands

### Build for Production
```bash
# Build the application for production
ng build

# Build with production optimizations
ng build --prod

# Build and output to custom directory
ng build --output-path dist/my-app
```

### Build for Development
```bash
# Build for development (no optimizations)
ng build --configuration development
```

## Testing Commands

### Run Unit Tests
```bash
# Run unit tests using Karma
ng test

# Run tests in watch mode
ng test --watch

# Run tests once and exit
ng test --watch=false
```

### Run End-to-End Tests
```bash
# Run e2e tests (if configured)
ng e2e
```

## Linting and Formatting

### Run Linter
```bash
# Run TSLint/ESLint on the project
ng lint

# Fix linting errors automatically
ng lint --fix
```

## Additional Utility Commands

### Generate Module
```bash
# Generate a feature module
ng g module features/user

# Generate module with routing
ng g module features/admin --routing
```

### Generate Guard
```bash
# Generate route guard
ng g guard guards/auth

# Generate specific type of guard
ng g guard guards/can-activate --implements CanActivate
```

### Generate Interface
```bash
# Generate TypeScript interface
ng g interface models/user

# Generate interface in specific folder
ng g interface models/todo
```

### Generate Enum
```bash
# Generate TypeScript enum
ng g enum enums/user-role
```

### Generate Class
```bash
# Generate TypeScript class
ng g class models/user
```

## Package Management

### Install Dependencies
```bash
# Install all dependencies listed in package.json
npm install

# Install a specific package
npm install package-name

# Install development dependency
npm install --save-dev package-name

# Install package globally
npm install -g package-name
```

### Update Dependencies
```bash
# Update Angular CLI globally
npm update -g @angular/cli

# Update Angular core and CLI in project
ng update @angular/core @angular/cli

# Update all Angular packages
ng update @angular/core @angular/cli @angular/material
```

## Workspace Commands

### Generate Application in Workspace
```bash
# Generate additional application in workspace
ng g application my-second-app
```

### Generate Library
```bash
# Generate a library in the workspace
ng g library my-lib
```

## Common Development Workflow

```bash
# 1. Create new Angular project
ng new my-angular-app
cd my-angular-app

# 2. Generate components for your app
ng g c components/header
ng g c components/footer
ng g c pages/home
ng g c pages/about

# 3. Generate services for business logic
ng g service services/data
ng g service services/auth

# 4. Start development server
npm start

# 5. Build for production when ready
ng build --prod
```

## Help Commands

### Get Help
```bash
# Get general help for Angular CLI
ng help

# Get help for specific command
ng generate --help
ng build --help
ng serve --help
```

## Version Information
```bash
# Check Angular CLI version
ng version

# Check Node.js version
node --version

# Check npm version
npm --version
```
