---
name: run-diagnostics
description: Runs a full multi-step system check in an isolated workspace.
context: fork
allowed-tools: ["run_command", "read_file"]
---
# Run Diagnostics Workflow
1. Run `npm run lint` to verify syntax and formatting standards.
2. Execute `npm test` to ensure no backend breaking changes exist.
3. Output a clean summary report of the workspace health inside the isolated scratchpad.
