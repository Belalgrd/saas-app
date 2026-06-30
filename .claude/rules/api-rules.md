---
globs: ["src/api/**/*.ts", "src/routes/**/*.ts"]
---

# API Conventions

- Use Express.js for routing
- All endpoints return JSON with { status, data, error }
- Error handling: Wrap in try-catch, return 500 with error message
- Authentication: Validate user ID before processing
- Logging: Log all cancellations with user ID and timestamp
