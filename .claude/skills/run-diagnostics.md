# run-diagnostics

**Description:** Runs a comprehensive diagnostic check on the Node.js/Express application, verifying environment variables, database connections, and test suites, and provides actionable remediation steps.

**Context:** fork

**Workflow Steps:**

1. **Environment Check:**
   - Verify that a `.env` file exists in the root directory.
   - *Decision Logic:* If missing, output a warning: "Missing .env file. Please copy .env.example to .env" and halt diagnostics.

2. **Dependency Verification:**
   - Run `npm list express mongoose react` to ensure core MERN stack packages are installed.
   - *Decision Logic:* If any are missing, prompt the user: "Core dependencies missing. Should I run npm install?"

3. **Run Linting & Tests:**
   - Execute `npm run lint`.
   - Execute `npm test`.
   
4. **Output Analysis:**
   - If tests pass: Output "✅ Diagnostics Complete: Application is healthy."
   - If tests fail: Analyze the error stack trace. Extract the exact file and line number causing the failure, and propose a specific code fix instead of just printing the error log.
