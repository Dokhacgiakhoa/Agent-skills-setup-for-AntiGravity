# Troubleshooting Guide

Common issues and solutions when using Antigravity IDE.

## 🛠️ Installation Issues

### `command not found: antigravity`
-   **Cause**: NPM binaries are not in your PATH or package wasn't linked.
-   **Fix**:
    -   Run `npm install -g antigravity-ide`
    -   Or try running with `npx antigravity-ide` directly.

### `EACCES: permission denied`
-   **Cause**: Installing globally without permission.
-   **Fix**:
    -   Use `sudo` (Mac/Linux): `sudo npm install -g ...`
    -   Or fix npm permissions (Recommended).

## 🤖 Runtime & AI Issues

### "Agent is not responding"
-   **Check**: Are your API Keys in `.env` correct?
-   **Fix**:
    -   Verify `GEMINI_API_KEY` or `OPENAI_API_KEY`.
    -   Check internet connection.

### "Token limit exceeded"
-   **Cause**: Context window is too full.
-   **Fix**:
    -   Use `task_boundary` to reset context contextually.
    -   Switch to a model with larger context (e.g., Gemini 1.5 Pro).

## 📦 Dependency Issues

### `npm ERR! legacy-peer-deps`
-   **Cause**: Conflict between React versions in skills.
-   **Fix**:
    -   Run `npm install --legacy-peer-deps`

---

## 🆘 Still Stuck?
Open an issue on [GitHub Issues](https://github.com/Dokhacgiakhoa/Agent-skills-setup-for-AntiGravity/issues).
