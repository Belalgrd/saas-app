---
globs: ["**/*.test.ts", "tests/**/*.ts"]
---

# Testing Conventions

These rules automatically load when editing or creating tests:

- Framework: Use Jest and Supertest for integration testing.
- Isolation: Mock all external payment gateway (Stripe) and database calls.
- Structure: Follow the Arrange-Act-Assert pattern inside `describe` blocks.
