---
globs: ["src/api/**/*.ts", "src/routes/**/*.ts"]
---
# Backend API Conventions

These rules automatically load when working on API endpoints:
- Naming: Use camelCase for route handlers and kebab-case for endpoint URLs.
- Response Format: Always return JSON with structure: `{ success: true, data: {} }`.
- Error Handling: Wrap logic in try-catch and return proper HTTP status codes (200, 201, 400, 500).
- Authentication: Protect all subscription modification routes using `verifySession` middleware.
