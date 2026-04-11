# API with SOLID Principles

REST API developed in TypeScript following SOLID principles.

## About

This project is a study application focused on Clean Architecture and SOLID principles. It implements user registration with proper separation of concerns.

## Features

- User registration (name, email, password)
- Password hashing with bcrypt
- Data validation with Zod
- Database with Prisma ORM
- Clean Architecture structure

## Tech Stack

- TypeScript
- Fastify
- Prisma
- SQLite
- bcryptjs
- Zod

## Project Structure

```
src/
├── http/
│   ├── controllers/      # Request handlers
│   └── routes.ts        # API routes
├── repositories/        # Data access layer
│   └── prisma/         # Prisma implementation
├── use-cases/          # Business logic
│   └── errors/         # Custom errors
├── lib/                # Utilities
├── env/                # Environment config
└── app.ts              # App configuration
```

## Prerequisites

- Node.js 18+
- npm or yarn

## Installation

```bash
npm install
```

## Configuration

1. Copy the environment file:
```bash
cp .env.example .env
```

2. Run Prisma migrations:
```bash
npx prisma migrate dev
```

## Running

Development:
```bash
npm run dev
```

Production:
```bash
npm run build
npm run start
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /users | Register a new user |

## Concepts Applied

- **S** - Single Responsibility Principle
- **O** - Open/Closed Principle
- **L** - Liskov Substitution Principle
- **I** - Interface Segregation Principle
- **D** - Dependency Inversion Principle